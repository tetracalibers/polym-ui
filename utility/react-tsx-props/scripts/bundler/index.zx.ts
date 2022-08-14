#!/usr/bin/env zx

/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'
import { bundleResource } from './rollup/rollup.resource.js'

function* iteratorGenerator(collection: (() => ProcessPromise)[]) {
  yield* collection
}

const isEven = (n: number) => n % 2 === 0

const commands = [...new Array(bundleResource.length * 2)].map((_, idx) => {
  const targetId = Math.floor(idx / 2)
  const build = () => $`rollup --config --config_target_idx ${targetId}`
  const prebuild = () =>
    $`rollup --config --config_type_check_mode --config_target_idx ${targetId}`
  return isEven(idx) ? prebuild : build
})

const next = (
  commandG: Generator<() => ProcessPromise, void, undefined>
): Generator<() => ProcessPromise, void, undefined> => {
  const { done, value: command } = commandG.next()
  if (done) {
    return (function* () {
      yield* commandG
    })()
  }
  command()
  return next(commandG)
}

const boot = (commands: (() => ProcessPromise)[]) => {
  const taskI = iteratorGenerator(commands)
  return next(taskI)
}

boot(commands)
