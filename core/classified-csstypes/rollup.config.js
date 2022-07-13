import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import Case from 'case'
import pkg from './package.json'

const production = process.env.NODE_ENV === 'production'

// Scopeを除去する
const moduleName = Case.pascal(pkg.name.replace(/^\@.*\//, ''))

// ライブラリに埋め込むcopyright
const banner = `/*!
  ${moduleName}.js v${pkg.version}
  ${pkg.homepage}
  Released under the ${pkg.license} License.
*/`

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/bundle.cjs',
        format: 'cjs',
        sourcemap: 'file',
        banner,
      },
      {
        file: 'dist/bundle.es.js',
        format: 'es',
        sourcemap: 'file',
        banner,
      },
      /** for script tag */
      //{
      //  file: 'dist/bundle-web.js',
      //  format: 'iife',
      //  name: 'StylingPatch',
      //},
      /** for universal */
      //{
      //  file: 'dist/bundle.umd.js',
      //  format: 'umd',
      //  name: 'StylingPatch',
      //},
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      nodeResolve(),
      esbuild({
        // All options are optional
        include: /\.[jt]sx?$/, // default, inferred from `loaders` option
        exclude: [
          'react-native-fetch-blob',
          'react-native-fs',
          'shelljs',
          'alasql',
        ], // default
        sourceMap: false, // by default inferred from rollup's `output.sourcemap` option
        sourceMap: !production,
        minify: production,
        target: 'esnext', // default, or 'es20XX', 'esnext'
        jsx: 'transform', // default, or 'preserve'
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        // Like @rollup/plugin-replace
        define: {
          __VERSION__: '"x.y.z"',
        },
        tsconfig: 'tsconfig.json', // default
        // Add extra loaders
        loaders: {
          // Add .json files support
          // require @rollup/plugin-commonjs
          '.json': 'json',
          // Enable JSX in .js files too
          '.js': 'jsx',
        },
      }),
      commonjs({
        strictRequires: true,
        sourceMap: false,
        transformMixedEsModules: true,
      }),
      json({
        compact: true,
      }),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        rootDir: 'src',
        declarationDir: '@types',
        declarationMap: true,
      }),
    ],
  },
]

export default config
