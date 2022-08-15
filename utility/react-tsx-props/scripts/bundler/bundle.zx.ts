#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

import 'zx/globals'
import _ from 'lodash'
import { bundleResource } from './rollup/rollup.resource.js'

const { extname } = path

type BundleResourceConfig = typeof bundleResource extends Array<infer T>
  ? T
  : never

type CommandThunk = () => void | ProcessPromise

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

const DEBUG = false

/* COMMAND OPTIONS ---------------------------------------------------------- */

const ON_TYPE_CHECK_MODE_FLAGS = [
  '--config',
  '--config_type_check_mode',
  '--config_target_idx',
]

const ON_DTS_DUMP_MODE_FLAGS = [
  /* ---------------------- */
  '--lib',
  'esnext',
  /* ---------------------- */
  '--emitDeclarationOnly',
  /* ---------------------- */
  '-d',
  /* ---------------------- */
  '--declarationDir',
  '@types',
  /* ---------------------- */
  '--moduleResolution',
  'node',
  /* ---------------------- */
  '--skipLibCheck',
  /* ---------------------- */
  '--esModuleInterop',
  /* ---------------------- */
  '--declarationMap',
  /* ---------------------- */
]

const ON_BUILD_MODE_FLAGS = _.without(
  ON_TYPE_CHECK_MODE_FLAGS,
  '--config_type_check_mode'
)

/* -------------------------------------------------------------------------- */
/* COMMAND                                                                    */
/* -------------------------------------------------------------------------- */

const typeCheckCommandBuilder = (targetIdx: number) => {
  return () =>
    DEBUG
      ? echo`rollup ${ON_TYPE_CHECK_MODE_FLAGS} ${targetIdx}`
      : $`rollup ${ON_TYPE_CHECK_MODE_FLAGS} ${targetIdx}`
}

const dumpDtsCommandBuilder = (targetInfo: BundleResourceConfig) => {
  const inFile = targetInfo.file.input
  return () => $`tsc ${ON_DTS_DUMP_MODE_FLAGS} ${inFile}`
}

const buildCommandBuilder = (targetIdx: number) => {
  return () =>
    DEBUG
      ? echo`rollup ${ON_BUILD_MODE_FLAGS} ${targetIdx}`
      : $`rollup ${ON_BUILD_MODE_FLAGS} ${targetIdx}`
}

const bundleCommandList = bundleResource.reduce((prev, info, idx) => {
  return [
    ...prev,
    typeCheckCommandBuilder(idx),
    dumpDtsCommandBuilder(info),
    buildCommandBuilder(idx),
  ]
}, [] as CommandThunk[])

/* -------------------------------------------------------------------------- */
/* UTILITY                                                                    */
/* -------------------------------------------------------------------------- */

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

if (!DEBUG) await $`rimraf lib`
await $`rimraf @types`

/* -------------------------------------------------------------------------- */
/* MAIN                                                                       */
/* -------------------------------------------------------------------------- */

await exec(traverserGenerator(bundleCommandList))

/* -------------------------------------------------------------------------- */
/* POSTPROCESS                                                                */
/* -------------------------------------------------------------------------- */

const copyFilesToDir = (toDirPath: string) => {
  return (fromFilePath: string) => async () => {
    const toFilePath = path.join(toDirPath, fromFilePath)
    const operate: (src: string, dist: string) => Promise<void> =
      extname(fromFilePath) === '.map' ? fs.move : fs.copy
    await operate(fromFilePath, toFilePath)
  }
}

const d_filePathList = await globby('{@types,src}/**/*.d.ts{,.map}', {
  onlyFiles: true,
})

const setCopyDfileTasks = (
  handle: (fileFilePath: string) => () => Promise<void>
) => {
  return d_filePathList.map((fromFilePath: string) => {
    return handle(fromFilePath)
  })
}

const copyToOutDirFunc = copyFilesToDir('lib')
const copyTasks = setCopyDfileTasks(copyToOutDirFunc)
await exec(traverserGenerator(copyTasks))
