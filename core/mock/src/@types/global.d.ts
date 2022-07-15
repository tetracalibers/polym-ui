declare namespace StylePatch {
  const stypContextTypes = [
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
  ] as const

  export interface ParseLog {
    classification: StypContextType
    tokens: ParseResult[]
  }

  export type StypContextType = typeof stypContextTypes[number]

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

  export interface SyntaxSchema {
    token: ArrowTokenType
    state: string
  }

  export interface Token {
    type: string
    value: string
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
