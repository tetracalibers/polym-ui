import _ from 'lodash'

export const tokenValidator = (
  exceptToken: StylePatch.ArrowTokenType,
  targetToken: string
) => {
  if (exceptToken === 'alphabet' && targetToken.match(/^[a-zA-Z]+$/g)) {
    return true
  }
  if (exceptToken === 'allowUnderline' && targetToken.match(/^[a-zA-Z_]+$/g)) {
    return true
  }
  if (exceptToken === 'allowHyphen' && targetToken.match(/^[a-zA-Z\-]+$/g)) {
    return true
  }
  if (_.isArray(exceptToken) && exceptToken.includes(targetToken)) {
    return true
  }
  if (_.has(exceptToken, 'regexp')) {
    const token = exceptToken as { regexp: string }
    if (targetToken.match(new RegExp(token.regexp, 'g'))) {
      return true
    }
  }
  if (_.has(exceptToken, 'stop')) {
    const token = exceptToken as { stop: string[] }
    if (token.stop.includes(targetToken)) {
      return true
    }
    return 'pending'
  }
  return false
}
