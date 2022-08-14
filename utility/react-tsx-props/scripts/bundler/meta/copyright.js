// ライブラリに埋め込むcopyright
export const copyright = pkg => {
  return `/*!
  ${pkg.name} v${pkg.version}
  ${pkg.homepage}
  Released under the ${pkg.license} License.
*/`
}
