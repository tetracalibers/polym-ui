import { bundleResource } from './scripts/bundler/rollup/rollup.resource.js'
import { options } from './scripts/bundler/rollup/rollup.options.js'
import * as pkg from './package.json'
import { copyright } from './scripts/bundler/meta/copyright.js'
import _ from 'lodash'

const addCopyright = _.mapValues(bundleResource, v => {
  const output = v.file.output.map(obj => {
    return {
      ...obj,
      banner: copyright(pkg),
    }
  })
  return {
    file: {
      input: v.file.input,
      output,
    },
    root: v.root,
  }
})

const packageNames = Object.keys(bundleResource)
const select = idx => addCopyright[packageNames[idx]]

export default commandLineArgs => {
  const { config_type_check_mode, config_target_idx } = commandLineArgs
  const config = select(config_target_idx)

  return {
    ...config.file,
    ...options(pkg)({
      rootDir: config.root,
      typeCheck: config_type_check_mode === true,
    }),
  }
}
