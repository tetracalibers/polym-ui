import * as ARRAY from 'fp-ts/Array'
import { tokenValidator } from './TokenValidator'
import { TokenSeqTraverser } from './TokenSeqTraverser'
import { flashError } from '../../../util/error'

const checkerIterationUnit =
  (prev: StylePatch.ParseResult[]) => (currState: StylePatch.NextState) => {
    const { parser, context } = currState
    const [except, ...rest] = context
    const { token: exceptToken } = except
    const targetToken = parser.traced().value
    const isValid = tokenValidator(exceptToken, targetToken)
    if (!isValid) {
      flashError(`[Syntax Error] unexpected token: ${targetToken}`)
    }
    const currResult = {
      token: targetToken,
      valid: isValid,
      pos: parser.pos,
    } as StylePatch.ParseResult
    const next = {
      parser: parser.next(),
      context: isValid === 'pending' ? context : rest,
    }
    return [ARRAY.concat([currResult])(prev), next] as [
      StylePatch.ParseResult[],
      StylePatch.NextState
    ]
  }

const checkerInitializer = checkerIterationUnit([] as StylePatch.ParseResult[])

const syntaxChecker =
  (contextDef: StylePatch.ContextDef) =>
  (contextType: StylePatch.ContextType, parser: TokenSeqTraverser) => {
    const validContext = contextDef[contextType]

    const initialState = {
      parser: parser,
      context: validContext,
    }

    return parser.tokenSeq.reduce(
      (prevChecker: [StylePatch.ParseResult[], StylePatch.NextState]) => {
        const [result, next] = prevChecker
        return next.context.length === 0
          ? prevChecker
          : checkerIterationUnit(result)(next)
      },
      checkerInitializer(initialState)
    )
  }

// prettier-ignore
export const syntaxCheckerGenerator = 
  (contextDef: StylePatch.ContextDef) => syntaxChecker(contextDef)
