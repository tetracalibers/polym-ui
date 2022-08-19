import * as mdnCssPropertiesJson from 'mdn-data/css/properties.json'
import _ from 'lodash'
import { customOptions as _customOptions } from './config'

const customOptions = _customOptions as { [key: string]: string[] }

export const mdnCssProperties = JSON.parse(
  JSON.stringify(mdnCssPropertiesJson)
).default

export const acronymOf = (word: string) => word.slice(0, 1)

export const withoutVendorProperties = _.pick(
  mdnCssProperties,
  Object.keys(mdnCssProperties).filter((propName: string) => {
    return acronymOf(propName) !== '-'
  })
)

export const convertedToCamelCase = _.mapKeys(
  withoutVendorProperties,
  (_val, key) => _.camelCase(key)
)

const words = (str: string) => str.split('|').map(word => word.trim())

export const final = _.mapValues(convertedToCamelCase, (val, key) => {
  const options = customOptions[key] ? customOptions[key] : words(val.syntax)

  return {
    control: {
      type: 'select',
    },
    options,
  }
})

export const getSelectTypeControlOption =
  <PropType extends string>() =>
  (cssPropName: PropType) =>
    final[cssPropName]
