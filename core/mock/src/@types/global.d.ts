declare namespace StylePatch {
  const contextTypes = [
    'BEGIN_tag',
    'BEGIN_css',
    'CSS_property',
    'CSS_value',
    'CSS_BEGIN_nesting',
    'CSS_END_nesting',
    'END_css',
    'END_tag',
    'START',
    'EOF',
    'ERROR',
    'JS_identifier',
    'JS_dot',
    'JS_BEGIN_parentheses',
    'JS_END_parentheses',
    'JS_BEGIN_brace',
    'JS_END_brace',
    'JS_arrow',
    'JS_literal',
  ] as const

  export type ContextType = typeof contextTypes[number]

  export type ContextFlags = {
    [K: string]: [
      [string | typeof P._, string | typeof P._],
      () => EITHER.Either<StylePatch.ContextType, StylePatch.ContextType>
    ]
  }
  export interface SyntaxSchema {
    token: ArrowTokenType
    state: string
  }

  export type ContextDef = {
    [K in ContextType]: SyntaxSchema[]
  }

  export type ContextCompass = (
    prevSyntax: ContextType,
    nextToken: string,
    nextNextToken: string
  ) => EITHER.Either<ContextType, ContextType>

  export interface ParseLog {
    classification: ContextType
    tokens: ParseResult[]
  }

  export type CssObjCollection = Record<string, CssInJs>

  export type ArrowTokenType =
    | 'alphabet'
    | 'allowUnderline'
    | 'allowHyphen'
    | 'cssString'
    | string[]
    | {
        stop?: string[]
        not?: string[]
        regexp?: string
      }

  export interface Token {
    type: string
    value: string
  }

  export interface Sentence {
    classify: string
    tokens: string[]
    pos: number
  }

  export interface Parser extends STORE.Store<number, Token> {
    next: (_: void) => void
    traced: (_: void) => Token
    seek: (p: number) => Parser
    tokenSeq: Token[]
  }

  export interface ParseResult {
    token: string
    valid: boolean
    pos: number
  }

  export interface NextState {
    parser: TokenSeqParser
    context: SyntaxSchema[]
  }
}
