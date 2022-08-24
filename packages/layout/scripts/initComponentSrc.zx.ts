/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'
import _ from 'lodash'

const argument = process.argv[2]
const componentName = `${argument}`
const dirname = `src/${componentName}`

await fs.copy('src/template', dirname)

await within(async () => {
  /* storiesファイルの改名 ----------------------------- */
  cd(`${dirname}/storybook`)
  await fs.move('componentName.stories.tsx', `${componentName}.stories.tsx`, {
    overwrite: true,
  })
})
