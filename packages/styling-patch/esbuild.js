import { build } from 'esbuild'

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  // outbaseを指定することで指定したディレクトリの構造が出力先ディレクトリに反映されるようになる
  // outbase: './src',
  // 出力先ディレクトリ
  //outdir: 'dist',
  outfile: 'dist/index.cjs',
  // 'node' 'browser' 'neutral' のいずれかを指定
  platform: 'node',
  // バンドルに含めたくないライブラリがある場合は、パッケージ名を文字列で列挙する
  external: [
    'react-native-fetch-blob',
    'react-native-fs',
    'shelljs',
    '/node_modules/',
  ],
  // trueにすれば、ファイルを監視して自動で再ビルドしてくれるようになる
  watch: false,
  define: {
    'process.env.NODE_ENV': '"development"',
  },
  loader: {
    '.svg': 'dataurl',
  },
  minify: false,
  sourcemap: true,
  mainFields: ['module', 'main'],
  resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.json'],
}).catch(() => process.exit(1))
