import * as parseResult from '../../../tmp/ast.json'
const { right: ast } = parseResult
import { pipe } from 'fp-ts/function'
import { map, foldMap } from 'fp-ts/Array'
import { match } from 'ts-pattern'
import _ from 'lodash'
import { result } from './astFromStyp'
import shell from 'shelljs'
const { ShellString } = shell
import jsonFormat from 'json-format'
const config_jsonFormat = {
  type: 'space',
  size: 2,
}

//new ShellString(jsonFormat(result, config_jsonFormat)).to('tmp/ast.json')

interface AstNode {
  readonly kind:
    | 'OPEN_componentTag'
    | 'OPEN_htmlTag'
    | 'CLOSE_tag'
    | 'CSS_property'
    | 'CSS_value'
    | 'START_css'
    | 'END_css'
    | 'BEGIN_nesting'
    | 'END_nesting'
    | 'BEGIN_stypFile'
    | 'END_stypFile'
  readonly value: string
}

type Ast = Array<AstNode>

// prettier-ignore
const css = pipe(
  ast as Ast,
  map(({ kind, value }: AstNode) => {
    return match(kind)
      .with('BEGIN_stypFile', () => '')
      .with('END_stypFile', () => '')
      .with('OPEN_componentTag', () => value + '{')
      .with('OPEN_htmlTag', () => value + '{')
      .with('CLOSE_tag', () => '}')
      .with('CSS_property', () => value + ':')
      .with('CSS_value', () => `"${value}"` + ';')
      .with('START_css', () => '')
      .with('END_css', () => '')
      .with('BEGIN_nesting', () => value)
      .with('END_nesting', () => value)
      .exhaustive()
    }
  ),
  foldMap({ concat: (a: string, b: string) => a + b, empty: '' })((s: string) => s)
)
console.log(css)

new ShellString(css).to('tmp/pseudoCSS.scss')
