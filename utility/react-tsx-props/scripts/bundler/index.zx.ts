#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'
import { bundleResource } from './rollup/rollup.resource.js'

const isEven = (n: number) => n % 2 === 0

const commands = [...new Array(bundleResource.length * 2)].map((_, idx) => {
  const targetId = Math.floor(idx / 2)
  const build = () => $`echo "rollup --config --config_target_idx ${targetId}"`
  const prebuild = () =>
    $`echo "rollup --config --config_type_check_mode --config_target_idx ${targetId}"`
  return isEven(idx) ? prebuild : build
})

function* traverserGenerator<T>(collec: (() => T)[]) {
  yield* collec
}

function* execCycleGenerator<T>(
  task: void | (() => T)
): Generator<void | T, void, unknown> {
  yield task && task()
}

const commandList = traverserGenerator(commands)

const exec = <T>(
  taskListTraverser: Generator<() => T, void, undefined>
): boolean => {
  const { done, value: task } = taskListTraverser.next()
  execCycleGenerator<T>(task).next()
  return done || exec(taskListTraverser)
}

exec(commandList)
