import { bundleResource } from './scripts/bundler/rollup/rollup.resource.js'
import { options } from './scripts/bundler/rollup/rollup.options.js'
import * as pkg from './package.json'

const names = Object.keys(bundleResource)
const select = idx => names[idx]

export default commandLineArgs => {
  const { type_check_mode, target_idx } = commandLineArgs
  const target = select(target_idx)
  const config = {
    ...bundleResource[target.file],
    ...options(pkg)({
      rootDir: target.root,
      typeCheck: !!type_check_mode,
    }),
  }
  return config
}
