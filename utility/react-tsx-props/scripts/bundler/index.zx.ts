#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

import 'zx/globals'
import _ from 'lodash'
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
const GLOBAL_DECLARE_FILE_OUTPUT_DIR = 'lib/@types'

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

const copyFilesToDir =
  (toDirPath: string) => (fromFilePath: string) => async () => {
    const fromDirPath = path.dirname(fromFilePath)
    await fs.mkdirp(fromDirPath)
    const toFilePath = toDirPath + '/' + path.basename(fromFilePath)
    await fs.copy(fromFilePath, toFilePath)
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

const done = await exec(traverserGenerator(buildCommandList))

/* -------------------------------------------------------------------------- */
/* POSTPROCESS                                                                */
/* -------------------------------------------------------------------------- */

const copyDfileToOutDir = copyFilesToDir(GLOBAL_DECLARE_FILE_OUTPUT_DIR)

if (done) {
  const ls_typesDir_Csv = (await $`ls -m ${GLOBAL_DECLARE_FILE_DIR}`).stdout
  const d_fileNameList = ls_typesDir_Csv.split(',').map(s => s.trim())
  const publishDfileTasks = d_fileNameList.map((fileName: string) => {
    const filePath = path.join(GLOBAL_DECLARE_FILE_DIR, fileName)
    return copyDfileToOutDir(filePath)
  })
  await exec(traverserGenerator(publishDfileTasks))
}
