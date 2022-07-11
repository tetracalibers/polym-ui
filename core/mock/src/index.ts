import * as S from 'parser-ts/string'
import * as P from 'parser-ts/Parser'
import * as C from 'parser-ts/char'
import { run } from 'parser-ts/code-frame'
import { pipe } from 'fp-ts/function'
import _ from 'lodash'
import shell from 'shelljs'
const { ShellString } = shell
import jsonFormat from 'json-format'
const config_jsonFormat = {
  type: 'space',
  size: 2,
}

const styp = `<StylePatch>
  <span>
    {{
      backgroundColor: '#1a1a1a',
      borderRadius: '2px',
      color: 'white',
      display: 'inline-block',
      fontSize: '0.8rem',
      padding: '0.4rem 0.5rem',
      position: 'relative',
      __after: {
        borderColor: '#1a1a1a transparent transparent transparent',
        borderStyle: 'solid',
        borderWidth: '3px 3px 0 3px',
        bottom: '0',
        content: '',
        display: 'block',
        height: '0',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, 100%)',
        width: '0',
      },
    }}
  </span>
</StylePatch>
`.replaceAll(/[\r\n\t]/g, '')

interface AstNode {
  readonly classification:
    | 'BEGIN_componentTag'
    | 'BEGIN_htmlTag'
    | 'END_tag'
    | 'CSS_property'
    | 'CSS_value'
    | 'BEGIN_css'
    | 'END_css'
    | 'BEGIN_nesting'
    | 'END_nesting'
    | 'BEGIN_stypFile'
    | 'END_stypFile'
    | 'empty'
  readonly body: string
  id?: string
  selector?: string
  property?: string
  class?: string
  normalize?: string
  except?: {
    before?: string
    after?: string
  }
  unexpect?: {
    before?: string
    after?: string
  }
}

const spaceTrim = P.surroundedBy(S.spaces)

const startFile: P.Parser<string, AstNode> = pipe(
  S.string('<StylePatch>'),
  P.map(body => ({
    classification: 'BEGIN_stypFile',
    body: body.slice(1, -1),
  }))
)

const endFile: P.Parser<string, AstNode> = pipe(
  S.string('</StylePatch>'),
  P.map(body => ({
    classification: 'END_stypFile',
    body: body.slice(2, -1),
  }))
)

const openingComponentTag: P.Parser<string, AstNode> = pipe(
  P.manyTill(
    pipe(
      C.char('<'),
      P.alt(() => C.letter)
    ),
    C.char('>')
  ),
  P.map(body => {
    return {
      classification: 'BEGIN_componentTag',
      body: body.slice(1).join(''),
    }
  })
)

const openingHtmlTag: P.Parser<string, AstNode> = pipe(
  P.manyTill(
    pipe(
      C.char('<'),
      P.alt(() => C.lower)
    ),
    C.char('>')
  ),
  P.map(body => {
    return {
      classification: 'BEGIN_htmlTag',
      body: body.slice(1).join(''),
    }
  })
)

const closingTag: P.Parser<string, AstNode> = pipe(
  P.manyTill(
    pipe(
      S.string('</'),
      P.alt(() => C.letter)
    ),
    C.char('>')
  ),
  P.map(body => ({
    classification: 'END_tag',
    body: body.slice(1).join(''),
  }))
)

const cssProperty: P.Parser<string, AstNode> = pipe(
  P.manyTill(
    pipe(
      C.letter,
      P.alt(() => C.oneOf(["'", '_'].join('')))
    ),
    C.char(':')
  ),
  P.map(body => ({
    classification: 'CSS_property',
    body: body.join(''),
  }))
)

const cssPropertyValue: P.Parser<string, AstNode> = pipe(
  P.manyTill(
    pipe(
      C.alphanum,
      P.alt(() =>
        C.oneOf(
          ["'", '"', ':', '#', '.', '-', '%', ' ', '(', ')', ','].join('')
        )
      )
    ),
    S.string("',")
  ),
  P.map(body => ({
    classification: 'CSS_value',
    body: body.join('').replaceAll(/\'/g, ''),
  }))
)

const startStylePatch: P.Parser<string, AstNode> = pipe(
  S.string('{{'),
  P.map(body => ({
    classification: 'BEGIN_css',
    body: body,
  }))
)

const endStylePatch: P.Parser<string, AstNode> = pipe(
  S.string('}}'),
  P.map(body => ({
    classification: 'END_css',
    body: body,
  }))
)

const startNestCss: P.Parser<string, AstNode> = pipe(
  S.string('{'),
  P.map(body => ({
    classification: 'BEGIN_nesting',
    body: body,
  }))
)

const endNestCss: P.Parser<string, AstNode> = pipe(
  S.string('},'),
  P.alt(() => C.char('}')),
  P.map(body => ({
    classification: 'END_nesting',
    body: body.replaceAll(',', ''),
  }))
)

const parser: P.Parser<string, AstNode> = pipe(
  startFile,
  P.alt(() => spaceTrim(endFile)),
  P.alt(() => spaceTrim(openingHtmlTag)),
  P.alt(() => spaceTrim(openingComponentTag)),
  P.alt(() => spaceTrim(closingTag)),
  P.alt(() => spaceTrim(cssProperty)),
  P.alt(() => spaceTrim(cssPropertyValue)),
  P.alt(() => spaceTrim(startStylePatch)),
  P.alt(() => spaceTrim(endStylePatch)),
  P.alt(() => spaceTrim(startNestCss)),
  P.alt(() => spaceTrim(endNestCss)),
  P.map(body => {
    return body
  })
)

const result = run(P.many(parser), styp)

const ast = result._tag === 'Right' ? result.right : []

const json = jsonFormat(ast, config_jsonFormat)

console.log(json)

new ShellString(json).to('tmp/building.json')

/* -------------------------------------------------------------------------- */

import { match } from 'ts-pattern'
import { nanoid } from 'nanoid'

let currentSelector: Array<string> = []
let currentProperty = ''

const skip = (_node: AstNode) => {}

const prefix = '_styp_'

const BEGIN_htmlTag = (node: AstNode) => {
  node['id'] = nanoid()
  node['selector'] = node.body + '.' + prefix + node.id
  node['class'] = prefix + node.id
  node['normalize'] = node.selector
  currentSelector.push(node.selector)
  return node
}

const BEGIN_css = (node: AstNode) => {
  node['normalize'] = '{'
  return node
}

const CSS_property = (node: AstNode) => {
  node['selector'] = currentSelector.join(' ')
  node['normalize'] = (() => {
    let after = node.body
      .replaceAll('_at_', '@')
      .replaceAll('__', '::')
      .replaceAll('_', ':')
    after = after.slice(0, 2) + _.kebabCase(after.slice(2))
    return after
  })()
  node['except'] = {
    after: ':',
  }
  currentProperty = node.normalize
  return node
}

const CSS_value = (node: AstNode) => {
  node['selector'] = currentSelector.join(' ')
  node['property'] = currentProperty
  node['normalize'] = node.body
  node['except'] = {
    after: ';',
  }
  return node
}

const BEGIN_nesting = (node: AstNode) => {
  currentSelector[_.findLastIndex(currentSelector)] = (() => {
    let after = currentSelector[_.findLastIndex(currentSelector)]
    after +=
      currentProperty[0] === ':' ? currentProperty : ' ' + currentProperty
    return after
  })()
  return node
}

const END_nesting = (node: AstNode) => {
  currentSelector[_.findLastIndex(currentSelector)] = (() => {
    let after = currentSelector[_.findLastIndex(currentSelector)]
    after = after.includes(':') ? after.slice(0, 1 * after.indexOf(':')) : after
    return after
  })()
  return node
}

const END_css = (node: AstNode) => {
  node['normalize'] = '}'
  return node
}

const END_tag = (node: AstNode) => {
  currentSelector = currentSelector.slice(-1)
  node['normalize'] = ''
  return node
}

const controller = (node: AstNode) => {
  const { classification } = node
  return match(classification)
    .with('BEGIN_stypFile', () => skip(node))
    .with('BEGIN_htmlTag', () => BEGIN_htmlTag(node))
    .with('BEGIN_css', () => BEGIN_css(node))
    .with('CSS_property', () => CSS_property(node))
    .with('CSS_value', () => CSS_value(node))
    .with('BEGIN_nesting', () => BEGIN_nesting(node))
    .with('END_nesting', () => END_nesting(node))
    .with('END_css', () => END_css(node))
    .with('END_tag', () => END_tag(node))
    .with('END_stypFile', () => skip(node))
    .otherwise(() => skip(node))
}

const detailedAst = ast
  .map((node: AstNode) => controller(node))
  .filter(elem => elem !== undefined)

/* -------------------------------------------------------------------------- */

const test = detailedAst

console.log(test)

const json2 = jsonFormat(test, config_jsonFormat)
console.log(json2)
new ShellString(json2).to('tmp/detailedAst.json')
