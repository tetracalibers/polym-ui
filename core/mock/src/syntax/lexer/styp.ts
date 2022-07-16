import { dumpJson } from '../../util/json'
import { rawStyp } from '../dummy/styp'
import { lexer } from './common/Lexer'

export const stypTokenSeq = lexer(rawStyp).filter(token => {
  const { type, value } = token
  return !value.includes('\n') && type !== 'WhiteSpace'
})

dumpJson(stypTokenSeq)('tmp/stypToken.json')
