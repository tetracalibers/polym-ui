import _ from 'lodash'
import { compose, system } from 'styled-system'
import { pseudo } from '../../constants/pseudo'

const capitalize = (str: string) => {
  return _.upperCase(str.slice(0, 1)) + str.slice(1)
}

export const mixinBuilder = <Props, Conf>(conf: Conf) => {
  const result = Object.entries(conf).reduce((prev, entry) => {
    const [propertyName] = entry
    const pseudoProps = pseudo.reduce((prev, prefix: string) => {
      return {
        ...prev,
        [`${prefix}${capitalize(propertyName)}`]: {
          property: propertyName,
          transform: (value: string) => {
            return `{} ${prefix} { ${propertyName}: ${value} }`
          },
        },
      }
    }, {})
    return {
      ...prev,
      [propertyName]: true,
      ...pseudoProps,
    }
  }, {} as { [pname in keyof Props]: (props: Props) => string })
  return system(result)
}
