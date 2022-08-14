#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

import 'zx/globals'
import _ from 'lodash'
import { bundleResource } from './rollup/rollup.resource.js'

/* -------------------------------------------------------------------------- */
/* CONFIG                                                                     */
/* -------------------------------------------------------------------------- */

const DEBUG = true

/* -------------------------------------------------------------------------- */
/* UTILITIES                                                                  */
/* -------------------------------------------------------------------------- */

const isEven = (n: number) => n % 2 === 0

/* -------------------------------------------------------------------------- */
/* COMMAND                                                                    */
/* -------------------------------------------------------------------------- */

const PREBUILD_FLAGS = [
  '--config',
  '--config_type_check_mode',
  '--config_target_idx',
]

const BUILD_FLAGS = _.without(PREBUILD_FLAGS, '--config_type_check_mode')

const commandList = [...new Array(bundleResource.length * 2)].map((_, idx) => {
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
})

/* -------------------------------------------------------------------------- */
/* CORE                                                                       */
/* -------------------------------------------------------------------------- */

function* traverserGenerator<T>(collec: (() => T)[]) {
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
/* EXEC                                                                       */
/* -------------------------------------------------------------------------- */

const commandListTraverser = traverserGenerator(commandList)

const done = await exec(commandListTraverser)

if (done) {
  //fs.copy('@types/')
}
