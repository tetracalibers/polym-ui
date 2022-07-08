import * as C from 'parser-ts/char'
import * as P from 'parser-ts/Parser'

export type CurrentCharIndex = number
export type CurrentChar = C.Char
//type EscapeChar = Readonly<{
//
//}>
export type Text = string

export type ErrorDescription = {
  name: 'Syntax error'
  message: string
  at: CurrentCharIndex
  text: Text
}

class jsonParser {}
