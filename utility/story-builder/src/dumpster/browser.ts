import * as mdnCssPropertiesJson from 'mdn-data/css/properties.json'
import _ from 'lodash'
import { config as _config } from './_config'

const config = _config as {
  [key: string]: {
    control?: 'text' | 'color'
    options?: string[]
    desc?: string
  }
}

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
  let controlInfo = {
    control: {
      type: 'select',
    },
    options: words(val.syntax),
  } as {
    control: {
      type: 'select' | 'text' | 'color'
    }
    options?: string[]
  }
  if (config[key] !== undefined) {
    const { options: customOptions, control: controlType } = config[key]
    if (['text', 'color'].includes(controlType!)) {
      controlInfo = {
        control: {
          type: controlType!,
        },
      }
    }
    if (customOptions) {
      controlInfo = {
        control: {
          type: 'select',
        },
        options: customOptions,
      }
    }
  }

  return {
    ...controlInfo,
    description: config[key]?.desc ?? '',
    table: {
      category: 'CSS',
      subcategory: val.groups
        .map((group: string) => group.replace('CSS', '').trim())
        .join(', '),
      type: {
        summary: null,
      },
      defaultValue: {
        detail:
          typeof val.initial === 'object' ? val.initial.join(',') : val.initial,
      },
    },
  }
})

export const getSelectTypeControlOption =
  <PropType extends string>() =>
  (cssPropName: PropType) =>
    final[cssPropName]

export type ControlType = 'text' | 'color'

export const controlType = (type: ControlType) => {
  return {
    control: {
      type,
    },
  }
}
