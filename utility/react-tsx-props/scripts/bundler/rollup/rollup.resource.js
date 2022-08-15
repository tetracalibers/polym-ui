export const bundleResource = [
  {
    file: {
      input: 'src/util-types.ts',
      output: [
        {
          file: 'lib/util-types.cjs',
          format: 'cjs',
          sourcemap: 'file',
        },
        {
          file: 'lib/util-types.es.js',
          format: 'es',
          sourcemap: 'file',
        },
      ],
    },
    root: 'src',
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
