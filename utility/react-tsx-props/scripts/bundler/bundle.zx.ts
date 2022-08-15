#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

import 'zx/globals'
import _ from 'lodash'
import { globby } from 'globby'
import { bundleResource } from './rollup/rollup.resource.js'

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

const DEBUG = false

const PREBUILD_FLAGS = [
  '--config',
  '--config_type_check_mode',
  '--config_target_idx',
]

const BUILD_FLAGS = _.without(PREBUILD_FLAGS, '--config_type_check_mode')

const GLOBAL_DECLARE_FILE_DIR = '@types'
const GLOBAL_DECLARE_FILE_OUTPUT_DIR = 'lib'

const GLOBBY_OPTION = {
  onlyDirectories: true,
  expandDirectories: false,
}

/* -------------------------------------------------------------------------- */
/* UTILITY                                                                    */
/* -------------------------------------------------------------------------- */

const isEven = (n: number) => n % 2 === 0

function* traverserGenerator<T>(collec: T[]) {
  yield* collec
}

async function* execCycleGenerator<T>(
  task: void | (() => T)
): AsyncGenerator<void | Awaited<T>, void, unknown> {
  task && (await task())
  yield
}

const exec = async <T>(
  taskListTraverser: Generator<() => T, void, undefined>
): Promise<boolean> => {
  const { done, value: task } = taskListTraverser.next()
  await execCycleGenerator<T>(task).next()
  return done || exec(taskListTraverser)
}

/* -------------------------------------------------------------------------- */
/* PREPROCESS                                                                 */
/* -------------------------------------------------------------------------- */

if (!DEBUG) {
  await $`rimraf lib`
}

/* -------------------------------------------------------------------------- */
/* MAIN                                                                       */
/* -------------------------------------------------------------------------- */

const buildCommandList = [...new Array(bundleResource.length * 2)].map(
  (_, idx) => {
    const targetId = Math.floor(idx / 2)
    const build = () =>
      DEBUG
        ? echo`rollup ${BUILD_FLAGS} ${targetId}`
        : $`rollup ${BUILD_FLAGS} ${targetId}`
    const prebuild = () =>
      DEBUG
        ? echo`rollup ${PREBUILD_FLAGS} ${targetId}`
        : $`rollup ${PREBUILD_FLAGS} ${targetId}`
    return isEven(idx) ? prebuild : build
  }
)

await exec(traverserGenerator(buildCommandList))

/* -------------------------------------------------------------------------- */
/* POSTPROCESS                                                                */
/* -------------------------------------------------------------------------- */

const copyFilesToDir =
  (toDirPath: string) => (fromFilePath: string) => async () => {
    await fs.mkdirp(toDirPath)
    const toFilePath = path.join(toDirPath, path.basename(fromFilePath))
    await fs.copy(fromFilePath, toFilePath)
  }

const shouldHaveDfileDir = await globby(
  GLOBAL_DECLARE_FILE_OUTPUT_DIR,
  GLOBBY_OPTION
)

const ls_typesDir_Csv = (await $`ls -m ${GLOBAL_DECLARE_FILE_DIR}`).stdout
const d_fileNameList = ls_typesDir_Csv.split(',').map(s => s.trim())

const setCopyDfileTasks = (
  handle: (toFilePath: string) => () => Promise<void>
) =>
  d_fileNameList.map((fileName: string) => {
    const fromFilePath = path.join(GLOBAL_DECLARE_FILE_DIR, fileName)
    return handle(fromFilePath)
  })

for (const outDir of shouldHaveDfileDir) {
  const copyToOutDirFunc = copyFilesToDir(outDir)
  const copyTasks = setCopyDfileTasks(copyToOutDirFunc)
  await exec(traverserGenerator(copyTasks))
}
