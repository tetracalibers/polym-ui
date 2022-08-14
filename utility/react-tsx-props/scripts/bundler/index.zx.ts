/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'
within(async () => {
  const { targetList } = await import('./rollup/rollup.resource.js')
  await targetList.forEach(async (_, idx) => {
    await $`rollup --config --type_check_mode --target_idx ${idx}`
    await $`rollup --config --target_idx ${idx}`
  })
})
