import { rawJsx } from '../dummy/jsx'
import { dumpJson } from '../../util/json'
import { lexer } from './common/Lexer'

export const jsxTokenSeq = lexer(rawJsx).filter(token => {
  const { type, value } = token
  return !value.includes('\n') && value.trim().length !== 0
})

dumpJson(jsxTokenSeq)('tmp/jsxToken.json')
