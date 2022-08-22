/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'zx/globals'
import _ from 'lodash'

const PREFIX = 'Will'
const componentName = process.argv[2]

await fs.copy('src/template', `src/${PREFIX}${_.capitalize(componentName)}`)
