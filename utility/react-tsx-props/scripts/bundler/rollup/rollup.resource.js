export const bundleResource = [
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
