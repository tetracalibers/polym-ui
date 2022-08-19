import * as mdnCssPropertiesJson from 'mdn-data/css/properties.json'
import _ from 'lodash'

const mdnCssProperties = JSON.parse(
  JSON.stringify(mdnCssPropertiesJson)
).default

const acronymOf = (word: string) => word.slice(0, 1)

const withoutVendorProperties = _.pick(
  mdnCssProperties,
  Object.keys(mdnCssProperties).filter((propName: string) => {
    return acronymOf(propName) !== '-'
  })
)

const pickSyntax = _.mapValues(withoutVendorProperties, val => {
  return {
    control: {
      type: 'select',
    },
    options: _.words(val.syntax),
  }
})

const convertedToCamelCase = _.mapKeys(pickSyntax, (_val, key) =>
  _.camelCase(key)
)

export const getSelectTypeControlOption =
  <PropType extends string>() =>
  (cssPropName: PropType) =>
    convertedToCamelCase[cssPropName]
