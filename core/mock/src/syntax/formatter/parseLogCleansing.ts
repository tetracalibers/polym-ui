import { parsedStyp } from '../parser/styp'
import { parsedJsx } from '../parser/jsx'
import { dumpJson } from '../../util/json'

const parseLogNoizeRemover = (
  history: StylePatch.ParseLog[]
): StylePatch.Sentence[] => {
  return history.map((log: StylePatch.ParseLog, idx: number) => {
    const { classification, tokens } = log
    const noiseRemovedTokens = tokens.map((info: StylePatch.ParseResult) => {
      const { token } = info
      return token
    })
    return {
      classify: classification,
      tokens: noiseRemovedTokens,
      pos: idx,
    }
  })
}

export const jsxSentence = parseLogNoizeRemover(parsedJsx)
dumpJson(jsxSentence)('tmp/jsx_sentence.json')

export const stypSentence = parseLogNoizeRemover(parsedStyp)
dumpJson(stypSentence)('tmp/styp_sentence.json')
