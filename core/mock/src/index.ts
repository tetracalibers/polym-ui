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

import { match } from 'ts-pattern'
import { customAlphabet } from 'nanoid'
import pkg from 'nanoid-dictionary'
const { alphanumeric, numbers } = pkg

const nanoid = customAlphabet(alphanumeric)
const nanoid_numbersOnly = customAlphabet(numbers, 10)

import type { CssInJs } from 'classified-csstypes'

// prettier-ignore
type CssObjCollection = Record<string, CssInJs>

/* -------------------------------------------------------------------------- */

import ComponentFile from './class/ComponentFile'

const componentRootPath =
  '/Users/tomixy/MyNpmPackage/React-Polyhedron-UI/Repository/React-polyhexUI/core/mock/src/components/atoms/Balloon/Balloon.tsx'

const jsxFile = new ComponentFile(componentRootPath)
const jsx = jsxFile.jsx

import convert from 'xml-js'

const stypFilePath = jsxFile.stylingFilePath

import StylingFile from './class/StylingFile'

const stypFile = new StylingFile(stypFilePath, jsx)

//stypFile.init()

/* -------------------------------------------------------------------------- */

const rawStyp = `<StylePatch>
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
  classification:
    | 'BEGIN_componentTag'
    | 'BEGIN_htmlTag'
    | 'END_tag'
    | 'CSS_property'
    | 'CSS_selector'
    | 'CSS_value'
    | 'BEGIN_css'
    | 'END_css'
    | 'BEGIN_nesting'
    | 'END_nesting'
    | 'BEGIN_stypFile'
    | 'END_stypFile'
    | 'empty'
  readonly body: string
  key?: string
  property?: string
  normalize?: string
  css?: CssInJs
}

const prefix = 'styp_'

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

const result = run(P.many(parser), rawStyp)

const tokens = result._tag === 'Right' ? result.right : []

const json = jsonFormat(tokens, config_jsonFormat)

new ShellString(json).to('tmp/tokens.json')

/* -------------------------------------------------------------------------- */

type JsxTree = {
  [K: string]: JsxTree
}

let escapedJsx = jsx

const attrJsRegExp = /<[\w]+(?<js>\s*\{.*?\}\s*).*?>/g

const attrJs = attrJsRegExp.exec(jsx)?.groups?.js
if (attrJs) {
  escapedJsx = jsx.replaceAll(attrJs, ` js_${nanoid()}="${_.trim(attrJs)}"`)
}

const jsxTree = convert.xml2js(escapedJsx, {
  compact: true,
  ignoreComment: true,
}) as JsxTree

let currentSelector: Array<string> = []
let currentElement: Array<string> = []

const skip = (_node: AstNode) => {
  return undefined
}

import * as dot from 'dot-prop'

let cssObjCollection = {} as CssObjCollection

let currentPath: Array<string> = []

const BEGIN_htmlTag = (node: AstNode) => {
  const id = prefix + nanoid()
  cssObjCollection[id] = {} as CssInJs
  currentPath.push(id)
  currentPath.push('&')
  console.log(currentPath.join('.'))
  currentSelector.push(id)
  currentElement.push(node.body)
  dot.setProperty(
    jsxTree,
    [...currentElement, '_attributes', `styp_${nanoid_numbersOnly()}`].join(
      '.'
    ),
    `styp_classNames['${id}']`
  )
  return node
}

const CSS_property = (node: AstNode) => {
  const normalize = node.body
    .replaceAll('__', '::')
    .replaceAll('_', ':')
    .replaceAll('_at_', '@')
    .replace(/^:/, '&:')
  if (normalize.includes('&')) {
    currentPath.pop()
  }
  currentPath.push(normalize)
  console.log(currentPath.join('.'))
  dot.setProperty(cssObjCollection, currentPath.join('.'), normalize)
  return node
}

const CSS_value = (node: AstNode) => {
  const normalize = node.body.length === 0 ? '""' : node.body
  dot.setProperty(cssObjCollection, currentPath.join('.'), normalize)
  currentPath.pop()
  console.log(currentPath.join('.'))
  return node
}

const END_tag = (_node: AstNode) => {
  currentSelector = currentSelector.slice(-1)
  return undefined
}

const controller = (node: AstNode) => {
  const { classification } = node
  return match(classification)
    .with('BEGIN_stypFile', () => skip(node))
    .with('BEGIN_htmlTag', () => BEGIN_htmlTag(node))
    .with('BEGIN_css', () => skip(node))
    .with('CSS_property', () => CSS_property(node))
    .with('CSS_value', () => CSS_value(node))
    .with('BEGIN_nesting', () => skip(node))
    .with('END_nesting', () => skip(node))
    .with('END_css', () => skip(node))
    .with('END_tag', () => END_tag(node))
    .with('END_stypFile', () => skip(node))
    .otherwise(() => skip(node))
}
tokens.map((node: AstNode) => controller(node))

console.log(jsonFormat(cssObjCollection, config_jsonFormat))

/** 
const css = ast.reduce((prev, curr) => {
  prev += curr.except?.before ? curr.except.before : ''
  prev += curr.normalize ? curr.normalize : ''
  prev += curr.except?.after ? curr.except.after : ''
  return prev
}, '')

console.log(css)

const json3 = jsonFormat(css, config_jsonFormat)

new ShellString(json3).to('tmp/cssObj.json')

import postcss from 'postcss'
import safe from 'postcss-safe-parser'
import autoprefixer from 'autoprefixer'
import stylefmt from 'stylefmt'
import * as path from 'path'
const { basename } = path

;(async () => {
  const formatted = await postcss([autoprefixer, stylefmt])
    .process(css, { parser: safe, from: undefined })
    .then(result => result.css)
  new ShellString(formatted).to(
    componentRootPath.replace(
      basename(componentRootPath),
      'generated/static.css'
    )
  )
})()

import postcssJs from 'postcss-js'

const prefixer = postcssJs.sync([autoprefixer])

const root = postcss.parse(css)
const cssSet = prefixer(postcssJs.objectify(root))

const cssSetJson = jsonFormat(cssSet, config_jsonFormat)
new ShellString(cssSetJson).to('tmp/cssSet.json')

/* -------------------------------------------------------------------------- */

const rebuildJsx = convert.js2xml(jsxTree, {
  compact: true,
})

//console.log(rebuildJsx)

import * as Diff from 'diff'

const diffJsx = Diff.diffWords(jsx, rebuildJsx)

//console.log(diffJsx)

/** 
import diff from 'fast-diff'

const diffJsx = diff(jsx, rebuildJsx)

const newJsx = diffJsx
  .map(record => {
    const [status, strings] = record
    if (status === 0) {
      return strings
    }
    if (strings.slice(0, 'js_'.length) === 'js_') {
      return ''
    }
    if (strings.slice(0, '" styp_'.length) === '" styp_') {
      return ' ' + strings.slice('" styp_'.length)
    }
    return ''
  })
  .join('')

console.log(newJsx)

const jsxRegexp = /<(StylePatch)>(?<jsx>.*?)<\/\1>/

const { cat } = shell

const oldSrc = cat(componentRootPath).toString()

const oldJsx = jsxRegexp.exec(oldSrc.replace(/\r?\n/g, ''))?.groups?.jsx

const newSrc =
  oldJsx !== undefined ? oldSrc.replace(_.trim(oldJsx), newJsx) : oldSrc

*/
//new ShellString(newSrc).to(
//  componentRootPath.replace(
//    basename(componentRootPath),
//    'generated/' + basename(componentRootPath)
//  )
//)
