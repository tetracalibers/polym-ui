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
      input: 'src/index.ts',
      output: [
        {
          file: 'lib/index.cjs',
          format: 'cjs',
          sourcemap: 'file',
        },
        {
          file: 'lib/index.es.js',
          format: 'es',
          sourcemap: 'file',
        },
      ],
    },
    root: 'src',
  },
]
