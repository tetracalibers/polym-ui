import { packageInitializer, packageMaker } from './dev/packageMaker'

const prefix = '@react-polyhex-ui'
const addPackages = ['mock']

;(async () => {
  await packageMaker(addPackages, prefix)
  await packageInitializer(addPackages)
})()
