import { options } from './rollup/rollup.options.js'

export default {
  input: 'meta/pkg.ts',
  output: {
    file: 'tmp/pkg.js',
    format: 'es',
    sourcemap: 'file',
  },
  ...options({ rootDir: './meta', tsconfig: './tsconfig.json', tsOnly: true }),
}
