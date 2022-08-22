/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'

const componentName = process.argv[2]

await fs.copy('src/template', `src/${componentName}`)
