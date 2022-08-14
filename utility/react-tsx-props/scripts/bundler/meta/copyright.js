import Case from 'case'
import * as pkg from '../tmp/pkg.js'

// Scopeを除去する
const moduleName = Case.pascal(pkg.name.replace(/^@.*\//, ''))

// ライブラリに埋め込むcopyright
export const banner = `/*!
  ${moduleName}.js v${pkg.version}
  ${pkg.homepage}
  Released under the ${pkg.license} License.
*/`
