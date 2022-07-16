import jsTokens from 'js-tokens'

export const lexer = (source: string) =>
  Array.from(jsTokens(source, { jsx: true }), token => token)
