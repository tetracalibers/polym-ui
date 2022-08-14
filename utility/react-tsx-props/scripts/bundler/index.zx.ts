/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'
within(async () => {
  cd('./scripts/bundler')
  await $`rimraf ./tmp`
  await $`rollup -c ./rollup.config.js`
  const { targetList } = await import('./rollup/rollup.resource.js')
  await targetList.forEach(async (_, idx) => {
    await $`echo "export const targetIdx = ${idx}" | rollup --config --configTypeCheck`
    await $`echo "export const targetIdx = ${idx}" | rollup --config`
  })
})
