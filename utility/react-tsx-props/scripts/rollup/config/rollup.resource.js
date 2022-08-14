import { banner } from '../meta/copyright'

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
