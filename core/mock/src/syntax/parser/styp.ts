import { P, match } from 'ts-pattern'
import { parserGenerator } from './common/Parser'
import { stypTokenSeq } from '../lexer/styp'
import { toJson, dumpJson, fromJson } from '../../util/json'
import * as EITHER from 'fp-ts/Either'
import * as contextDefJson from '../context/stypContext.json'

const contextDef = fromJson(contextDefJson)

const contextCompass: StylePatch.ContextCompass = (
  prevContext,
  nextToken,
  nextNextToken
) => {
  return match(prevContext as StylePatch.ContextType)
    .with('START', () => EITHER.right('BEGIN_tag'))
    .with('BEGIN_tag', () => {
      return match([nextToken, nextNextToken])
        .with(['<', '/'], () => EITHER.right('END_tag'))
        .with(['<', P._], () => EITHER.right('BEGIN_tag'))
        .with(['{', '{'], () => EITHER.right('BEGIN_css'))
        .otherwise(() => EITHER.left('ERROR'))
    })
    .with('END_tag', () => {
      return match([nextToken, nextNextToken])
        .with(['<', '/'], () => EITHER.right('END_tag'))
        .with(['<', P._], () => EITHER.right('BEGIN_tag'))
        .otherwise(() => EITHER.left('EOF'))
    })
    .with('BEGIN_css', () => {
      return match(nextToken)
        .with('}', () => EITHER.right('END_css'))
        .otherwise(() => EITHER.right('CSS_property'))
    })
    .with('CSS_property', () => EITHER.right('CSS_value'))
    .with('CSS_value', () => {
      return match([nextToken, nextNextToken])
        .with(['}', P._], () => EITHER.right('CSS_END_nesting'))
        .with([P.union(',', '}'), '}'], () => EITHER.right('END_css'))
        .with([P.when(t => /^[_:@&]+[a-zA-Z_]+$/g.test(t)), ':'], () =>
          EITHER.right('CSS_BEGIN_nesting')
        )
        .otherwise(() => EITHER.right('CSS_property'))
    })
    .with('CSS_BEGIN_nesting', () => {
      return match(nextToken)
        .with('}', () => EITHER.right('CSS_END_nesting'))
        .otherwise(() => EITHER.right('CSS_property'))
    })
    .with('CSS_END_nesting', () => {
      return match(nextToken)
        .with(P.union(',', '}'), () => EITHER.right('END_css'))
        .otherwise(() => EITHER.right('CSS_property'))
    })
    .with('END_css', () => EITHER.right('END_tag'))
    .otherwise(() => EITHER.left('ERROR'))
}

const parseStart = parserGenerator(contextDef, contextCompass)

export const parsedStyp = parseStart(stypTokenSeq)

const parsedStypJson = toJson(parsedStyp)
dumpJson(parsedStypJson)('tmp/parsedStyp.json')
