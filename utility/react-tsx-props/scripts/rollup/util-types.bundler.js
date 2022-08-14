import { options, banner } from 'config/rollup.plugin.js'

const config = {
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
  ...options('src/util-types'),
}

export default config
