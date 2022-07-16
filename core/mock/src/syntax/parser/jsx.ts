import { parserGenerator } from './common/Parser'
import { jsxTokenSeq } from './common/lexer'
import { toJson, dumpJson, fromJson } from '../../util/json'
import * as contextDefJson from '../context/jsxContext.json'

const contextDef = fromJson(contextDefJson)

const contextCompass: StylePatch.ContextCompass = (
  _prevContext,
  _nextToken,
  _nextNextToken
) => {}

const parseStart = parserGenerator(contextDef, contextCompass)

export const parsedJsx = parseStart(jsxTokenSeq)

const parsedJsxJson = toJson(parsedJsx)
dumpJson(parsedJsxJson)('tmp/parsedJsx.json')
