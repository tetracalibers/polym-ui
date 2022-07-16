import jsTokens from 'js-tokens'
import { rawStyp } from './dummy/styp'
import { rawJsx } from './dummy/jsx'
import { toJson, dumpJson } from '../util/json'

const lexer = (source: string) =>
  Array.from(jsTokens(source, { jsx: true }), token => token)

export const stypTokenSeq = lexer(rawStyp).filter(token => {
  const { type, value } = token
  return !value.includes('\n') && type !== 'WhiteSpace'
})
const stypTokenSeqJson = toJson(stypTokenSeq)

dumpJson(stypTokenSeqJson)('tmp/stypToken.json')

export const jsxTokenSeq = lexer(rawJsx).filter(token => {
  const { type, value } = token
  return !value.includes('\n') && type !== 'WhiteSpace'
})
const jsxTokenSeqJson = toJson(jsxTokenSeq)
dumpJson(jsxTokenSeqJson)('tmp/jsxToken.json')
