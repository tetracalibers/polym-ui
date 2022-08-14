import { options, banner } from 'config/rollup.plugin.js'

const config = {
  input: 'src/def-tool/index.ts',
  output: [
    {
      file: 'lib/def-tool/index.cjs',
      format: 'cjs',
      sourcemap: 'file',
      banner,
    },
    {
      file: 'lib/def-tool/index.es.js',
      format: 'es',
      sourcemap: 'file',
      banner,
    },
  ],
  ...options('src/def-tool'),
}

export default config
