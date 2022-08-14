import { bundleResource } from './scripts/bundler/rollup/rollup.resource.js'
import { options } from './scripts/bundler/rollup/rollup.options.js'
import * as pkg from './package.json'
import { copyright } from './scripts/bundler/meta/copyright.js'

const addCopyright = bundleResource.map(v => {
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

const select = idx => addCopyright[idx]

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
