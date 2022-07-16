import { TokenSeqTraverser } from './TokenSeqTraverser'
import { syntaxCheckerGenerator } from './SyntaxChecker'
import { flashError } from '../../../util/error'
import * as EITHER from 'fp-ts/Either'
import _ from 'lodash'
import { logJson } from '../../../util/json'

export const parserGenerator = (
  contextDef: StylePatch.ContextDef,
  contextCompass: StylePatch.ContextCompass
) => {
  const syntaxChecker = syntaxCheckerGenerator(contextDef)
  const parserIterationUnit =
    (prevSyntax: StylePatch.ContextType) =>
    (history: StylePatch.ParseLog[]) =>
    (nextParser: TokenSeqTraverser) => {
      const nextToken = nextParser.traced().value
      const nextNextToken = nextParser.next().traced()?.value
      const exceptContext = contextCompass(prevSyntax, nextToken, nextNextToken)

      const onRight = (
        route: StylePatch.ContextType
      ): StylePatch.ParseLog[] => {
        const [result, next] = syntaxChecker(route, nextParser)
        history = [
          ...history,
          {
            classification: route,
            tokens: result,
          },
        ]
        const last = _.last(result) as StylePatch.ParseResult
        if (last.pos === next.parser.tokenSeq.length - 1) {
          return history
        }
        return parserIterationUnit(route)(history)(next.parser)
      }
      const onLeft = (badType: string) => {
        if (badType === 'ERROR') {
          flashError(`[Syntax Error] Contextually Invalid Token Sequence`)
        }
        return history
      }
      return EITHER.match(onLeft, onRight)(exceptContext)
    }
  const parseStart = (tokenSeq: StylePatch.Token[]) =>
    parserIterationUnit('START')([])(new TokenSeqTraverser(tokenSeq))
  return parseStart
}
