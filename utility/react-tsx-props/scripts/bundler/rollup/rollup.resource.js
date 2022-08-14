import { banner } from '../meta/copyright.js'
import _ from 'lodash'

export const bundleResource = {
  utilTypes: {
    file: {
      input: 'src/util-types/index.ts',
      output: [
        {
          file: 'lib/util-types/index.cjs',
          format: 'cjs',
          sourcemap: 'file',
          banner,
        },
        {
          file: 'lib/util-types/index.es.js',
          format: 'es',
          sourcemap: 'file',
          banner,
        },
      ],
    },
    root: 'src/util-types',
  },
  defTool: {
    file: {
      input: 'src/util-types/index.ts',
      output: [
        {
          file: 'lib/util-types/index.cjs',
          format: 'cjs',
          sourcemap: 'file',
          banner,
        },
        {
          file: 'lib/util-types/index.es.js',
          format: 'es',
          sourcemap: 'file',
          banner,
        },
      ],
    },
    root: 'src/def-tool',
  },
}

export const targetList = Object.keys(
  _.mapKeys(bundleResource, k => _.kebabCase(k))
)
