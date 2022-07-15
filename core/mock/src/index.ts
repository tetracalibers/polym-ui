import _ from 'lodash'
import shell from 'shelljs'
const { ShellString } = shell
import jsonFormat from 'json-format'
const config_jsonFormat = {
  type: 'space',
  size: 2,
}

import PrettyError from 'pretty-error'
const pe = PrettyError.start()

pe.appendStyle({
  'pretty-error > header > title > kind': {
    background: 'white',
    color: 'bright-cyan',
  },
  'pretty-error > header > colon': {
    color: 'bright-blue',
  },
  'pretty-error > header > message': {
    color: 'bright-white',
    // we can use black, red, green, yellow, blue, magenta, cyan, white,
    // grey, bright-red, bright-green, bright-yellow, bright-blue,
    // bright-magenta, bright-cyan, and bright-white
    background: 'bright-magenta',
    padding: '0', // top/bottom left/right
  },
  'pretty-error > trace > item': {
    marginLeft: 0,
    bullet: '"<grey>o</grey>"',
  },
  'pretty-error > trace > item > header > pointer > file': {
    color: 'bright-magenta',
  },
  'pretty-error > trace > item > header > pointer > colon': {
    color: 'magenta',
  },
  'pretty-error > trace > item > header > pointer > line': {
    color: 'bright-magenta',
  },
  'pretty-error > trace > item > header > what': {
    color: 'bright-white',
  },
  'pretty-error > trace > item > footer > addr': {},
})

import { match } from 'ts-pattern'
import { customAlphabet } from 'nanoid'
import pkg from 'nanoid-dictionary'
const { alphanumeric, numbers } = pkg
import jsTokens from 'js-tokens'

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
  <span className={classNames('foo', { bar: true, duck: false }, 'baz', { quux: true })}>
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
`

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
}

const prefix = 'styp_'

/* -------------------------------------------------------------------------- */

const tokenSequence = Array.from(
  jsTokens(rawStyp, { jsx: true }),
  token => token
).filter(token => {
  const { type, value } = token
  return !value.includes('\n') && type !== 'WhiteSpace'
})
const jstokenJson = jsonFormat(tokenSequence, config_jsonFormat)

new ShellString(jstokenJson).to('tmp/jstoken.json')

/* -------------------------------------------------------------------------- */

import * as STORE from 'fp-ts/Store'

interface Token {
  type: string
  value: string
}

interface Parser extends STORE.Store<number, Token> {
  next: (_: void) => void
  traced: (_: void) => Token
  seek: (p: number) => Parser
}

class TokenSeqParser implements Parser {
  constructor(pos = 0) {
    this.pos = pos
  }
  peek = (pos: number) => tokenSequence[pos]
  pos
  traced = (_: void) => this.peek(this.pos)
  seek = (p: number) => new TokenSeqParser(p)
  next = (_: void) => this.seek(this.pos + 1)
}

import * as syntaxSchemaJson from './syntax/schema.json'

const contextFlow = JSON.parse(JSON.stringify(syntaxSchemaJson))

interface SyntaxSchema {
  token: 'any' | string[]
  next: 'any' | string[]
  state: string
}

import * as ARRAY from 'fp-ts/Array'

const contextTypes = [
  'BEGIN_file',
  'TAG_prop',
  'BEGIN_tag',
  'BEGIN_css',
  'CSS_statement',
  'END_css',
  'END_tag',
  'END_file',
] as const

type ContextType = typeof contextTypes[number]

interface ParseResult {
  token: string
  valid: boolean
  pos: number
}

interface NextState {
  parser: TokenSeqParser
  context: SyntaxSchema[]
}

/**
  checker: (p: ParseResult[]) => State<ParseResult[], TokenSeqParser>
  init   : (t: TokenSeqParser) => State<ParseResult[], TokenSeqParser>
 */
const syntaxChecker = (
  contextType: ContextType,
  parser = new TokenSeqParser()
) => {
  const validContext = contextFlow[contextType]

  const initialState = {
    parser: parser,
    context: validContext,
  }

  const judgeValid = (
    exceptToken: 'any' | 'alphabet' | { stop: string[] } | string[],
    targetToken: string
  ) => {
    if (exceptToken === 'any') {
      return true
    }
    if (exceptToken === 'alphabet' && targetToken.match(/[a-zA-Z_]+/)) {
      return true
    }
    if (exceptToken === targetToken) {
      return true
    }
    if (_.isArray(exceptToken) && exceptToken.includes(targetToken)) {
      return true
    }
    if (_.has(exceptToken, 'stop')) {
      const stopKeywords = exceptToken as { stop: string[] }
      if (stopKeywords.stop.includes(targetToken)) {
        return true
      }
      return 'pending'
    }
    return false
  }

  const checker = (prev: ParseResult[]) => (currState: NextState) => {
    const { parser, context } = currState
    const [except, ...rest] = context
    const { token: exceptToken } = except
    const targetToken = parser.traced().value
    const isValid = judgeValid(exceptToken, targetToken)
    if (!isValid) {
      console.error(
        pe.render(new Error(`[Syntax Error] unexpected token: ${targetToken}`))
      )
    }
    const currResult = {
      token: targetToken,
      valid: isValid,
      pos: parser.pos,
    } as ParseResult
    const next = {
      parser: parser.next(),
      context: isValid === 'pending' ? context : rest,
    }
    return [ARRAY.concat([currResult])(prev), next] as [
      ParseResult[],
      NextState
    ]
  }
  const initializer = checker([] as ParseResult[])

  /*
  return STATE.chain(checker)(initializer)(initialState)
  */
  return tokenSequence.reduce((prevChecker: [ParseResult[], NextState]) => {
    const [result, next] = prevChecker
    return next.context.length === 0 ? prevChecker : checker(result)(next)
  }, initializer(initialState))
}

import { P } from 'ts-pattern'

const parseStart = (nextParser: TokenSeqParser) => {
  const nextToken = nextParser.traced().value
  const nextNextToken = nextParser.next().traced().value
  const route = match([nextToken, nextNextToken])
    .with(['/', P._], () => 'END_tag')
    .with(['<', '/'], () => 'END_tag')
    .with(['<', P._], () => 'BEGIN_tag')
    .with(['{', '{'], () => 'BEGIN_css')
    .with([P.union(',', '}'), P.union('}', ',')], () => 'END_css')
    .otherwise(() => 'CSS_statement') as ContextType
  const [result, next] = syntaxChecker(route, nextParser)
  const last = _.last(result) as ParseResult
  if (last.pos === tokenSequence.length - 1) {
    return
  }
  parseStart(next.parser)
}

parseStart(new TokenSeqParser())

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
  //console.log(currentPath.join('.'))
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
  //console.log(currentPath.join('.'))
  dot.setProperty(cssObjCollection, currentPath.join('.'), normalize)
  return node
}

const CSS_value = (node: AstNode) => {
  const normalize = node.body.length === 0 ? '""' : node.body
  dot.setProperty(cssObjCollection, currentPath.join('.'), normalize)
  currentPath.pop()
  //console.log(currentPath.join('.'))
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
//tokens.map((node: AstNode) => controller(node))

/**
TODO CSSの宣言順序保証問題をどうにかする
 */

//console.log(jsonFormat(cssObjCollection, config_jsonFormat), '\n')

/* -------------------------------------------------------------------------- */

const rebuildJsx = convert.js2xml(jsxTree, {
  compact: true,
})

console.log(rebuildJsx, '\n')

import * as Diff from 'diff'
import { isValid } from 'date-and-time'

const diffJsx = Diff.diffWords(jsx, rebuildJsx)

//console.log(diffJsx, '\n')

const newJsx = diffJsx
  .map(r => {
    if (!r.added && !r.removed) {
      return r.value
    }
    const jsValPrefix = 'js_'
    if (r.added && r.value.slice(0, jsValPrefix.length) === jsValPrefix) {
      return ''
    }
    return r.value
  })
  .join('')

//console.log(newJsx, '\n')

/** 
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
