import { bundleResource } from './config/rollup.resource'
import { options } from './config/rollup.options'

const names = Object.keys(bundleResource)
const select = idx => names[idx]

export default commandLineArgs => {
  const { configTypeCheck, configTargetIdx } = commandLineArgs
  const target = select(configTargetIdx)
  return {
    ...bundleResource[target],
    ...options(target.root, configTypeCheck),
  }
}
