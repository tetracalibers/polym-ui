import { bundleResource } from './scripts/bundler/rollup/rollup.resource.js'
import { options } from './scripts/bundler/rollup/rollup.options.js'
import targetIdx from '-'
import * as pkg from './package.json'

const names = Object.keys(bundleResource)
const select = idx => names[idx]

export default commandLineArgs => {
  const target = select(targetIdx)
  const config = {
    ...bundleResource[target.file],
    ...options(pkg)({
      rootDir: target.root,
      typeCheck: !!commandLineArgs.configTypeCheck,
    }),
  }
  return config
}
