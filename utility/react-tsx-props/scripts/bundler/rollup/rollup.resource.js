export const bundleResource = [
  {
    file: {
      input: 'src/util-types/index.ts',
      output: [
        {
          file: 'lib/util-types/index.cjs',
          format: 'cjs',
          sourcemap: 'file',
        },
        {
          file: 'lib/util-types/index.es.js',
          format: 'es',
          sourcemap: 'file',
        },
      ],
    },
    root: 'src/util-types',
  },
  {
    file: {
      input: 'src/def-tool/index.ts',
      output: [
        {
          file: 'lib/def-tool/index.cjs',
          format: 'cjs',
          sourcemap: 'file',
        },
        {
          file: 'lib/def-tool/index.es.js',
          format: 'es',
          sourcemap: 'file',
        },
      ],
    },
    root: 'src/def-tool',
  },
]
