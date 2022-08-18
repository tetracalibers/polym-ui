import _ from 'lodash'

export const mixinBuilder = <Props, Conf>(conf: Conf) => {
  return Object.entries(conf).reduce((prev, entry) => {
    const [propertyName] = entry
    return {
      ...prev,
      [propertyName]: true,
    }
  }, {} as { [pname in keyof Props]: (props: Props) => string })
}
