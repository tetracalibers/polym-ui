import { packageInitializer, packageMaker } from './dev/packageMaker'

const prefix = '@react-polyhex-ui'
const utilPrefix = '@polyhex-utility'
const addPackages = ['functional']

;(async () => {
  await packageMaker(addPackages, utilPrefix)
  await packageInitializer(addPackages)
})()
