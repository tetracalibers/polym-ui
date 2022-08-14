/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'
;(async () => {
  const { bundleResource } = await import('./rollup/rollup.resource.js')
  bundleResource.forEach(async (_, idx) => {
    await $`rollup --config --config_type_check_mode --config_target_idx ${idx}`
    await $`rollup --config --config_target_idx ${idx}`
  })
})()
