import { P, match } from 'ts-pattern'
import { parserGenerator } from './common/Parser'
import { jsxTokenSeq } from '../lexer/jsx'
import { dumpJson, fromJson } from '../../util/json'
import * as EITHER from 'fp-ts/Either'
import * as contextDefJson from '../context/jsxContext.json'

const contextDef = fromJson(contextDefJson)

const cxF: StylePatch.ContextFlags = {
  // prettier-ignore
  JS_BEGIN_parentheses: [['(', P._], () => EITHER.right('JS_BEGIN_parentheses')],
  JS_END_parentheses: [[')', P._], () => EITHER.right('JS_END_parentheses')],
  JS_BEGIN_brace: [['{', P._], () => EITHER.right('JS_BEGIN_brace')],
  JS_END_brace: [['}', P._], () => EITHER.right('JS_END_brace')],
  BEGIN_tag: [['<', P._], () => EITHER.right('BEGIN_tag')],
  END_tag: [['<', '/'], () => EITHER.right('END_tag')],
  JS_dot: [['.', P._], () => EITHER.right('JS_dot')],
  JS_arrow: [['=>', P._], () => EITHER.right('JS_arrow')],
  // prettier-ignore
  JS_literal: [
    [P.when(t => /^['"`].*?['"`]$/g.test(t as string)), P._], 
    () => EITHER.right('JS_literal'),
  ],
  // prettier-ignore
  JS_identifier: [
    [P.when(t => /^[a-zA-Z_]+$/g.test(t as string)), P._], 
    () => EITHER.right('JS_identifier')
  ],
}

const contextCompass: StylePatch.ContextCompass = (
  prevContext,
  nextToken,
  nextNextToken
) => {
  return match(prevContext)
    .with('START', () => {
      return match([nextToken, nextNextToken])
        .with(...cxF.JS_BEGIN_brace)
        .with(...cxF.BEGIN_tag)
        .otherwise(() => EITHER.left('EOF'))
    })
    .with('BEGIN_tag', () => {
      return match([nextToken, nextNextToken])
        .with(...cxF.END_tag)
        .with(...cxF.JS_BEGIN_brace)
        .with(...cxF.JS_END_parentheses)
        .otherwise(() => EITHER.left('ERROR'))
    })
    .with('END_tag', () => {
      return match([nextToken, nextNextToken])
        .with(...cxF.END_tag)
        .with(...cxF.BEGIN_tag)
        .with(...cxF.JS_BEGIN_brace)
        .with(...cxF.JS_END_parentheses)
        .otherwise(() => EITHER.left('EOF'))
    })
    .with('JS_identifier', () => {
      return match([nextToken, nextNextToken])
        .with(...cxF.JS_dot)
        .with(...cxF.JS_BEGIN_parentheses)
        .with(...cxF.JS_END_brace)
        .otherwise(() => EITHER.left('ERROR'))
    })
    .with('JS_dot', () => {
      return match([nextToken, nextNextToken])
        .with(...cxF.JS_identifier)
        .otherwise(() => EITHER.left('ERROR'))
    })
    .with('JS_BEGIN_parentheses', () => {
      return match([nextToken, nextNextToken])
        .with(...cxF.JS_identifier)
        .with(...cxF.JS_BEGIN_parentheses)
        .with(...cxF.JS_BEGIN_brace)
        .with(...cxF.JS_END_parentheses)
        .with(...cxF.BEGIN_tag)
        .otherwise(() => EITHER.left('ERROR'))
    })
    .with('JS_END_parentheses', () => {
      return match([nextToken, nextNextToken])
        .with(...cxF.JS_BEGIN_parentheses)
        .with(...cxF.JS_END_parentheses)
        .with(...cxF.JS_BEGIN_brace)
        .with(...cxF.JS_END_brace)
        .with(...cxF.JS_arrow)
        .otherwise(() => EITHER.left('ERROR'))
    })
    .with('JS_arrow', () => {
      return match([nextToken, nextNextToken])
        .with(...cxF.JS_BEGIN_parentheses)
        .with(...cxF.JS_BEGIN_brace)
        .with(...cxF.JS_identifier)
        .otherwise(() => EITHER.left('ERROR'))
    })
    .with('JS_BEGIN_brace', () => {
      return match([nextToken, nextNextToken])
        .with(...cxF.JS_identifier)
        .with(...cxF.JS_BEGIN_brace)
        .with(...cxF.JS_BEGIN_parentheses)
        .with(...cxF.JS_END_brace)
        .otherwise(() => EITHER.left('ERROR'))
    })
    .with('JS_END_brace', () => {
      return match([nextToken, nextNextToken])
        .with(...cxF.END_tag)
        .with(...cxF.BEGIN_tag)
        .otherwise(() => EITHER.left('EOF'))
    })
    .otherwise(() => EITHER.left('ERROR'))
}

const parseStart = parserGenerator(contextDef, contextCompass)

export const parsedJsx = parseStart(jsxTokenSeq)

dumpJson(parsedJsx)('tmp/parsedJsx.json')
