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

const prefix = 'styp_'

/* -------------------------------------------------------------------------- */

const toJson = (source: object) => jsonFormat(source, config_jsonFormat)

import * as Diff from 'diff'

const lexer = (source: string) =>
  Array.from(jsTokens(source, { jsx: true }), token => token)

const stypTokenSeq = lexer(rawStyp).filter(token => {
  const { type, value } = token
  return !value.includes('\n') && type !== 'WhiteSpace'
})
const stypTokenSeqJson = jsonFormat(stypTokenSeq, config_jsonFormat)

new ShellString(stypTokenSeqJson).to('tmp/stypToken.json')

const jsxTokenSeq = lexer(jsx).filter(token => {
  const { type, value } = token
  return !value.includes('\n') && type !== 'WhiteSpace'
})
const jsxTokenSeqJson = jsonFormat(jsxTokenSeq, config_jsonFormat)
new ShellString(jsxTokenSeqJson).to('tmp/jsxToken.json')

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
  tokenSeq: Token[]
}

class TokenSeqParser implements Parser {
  constructor(tokenSeq: Token[], pos = 0) {
    this.pos = pos
    this.tokenSeq = tokenSeq
  }
  pos
  tokenSeq
  peek = (pos: number) => this.tokenSeq[pos]
  traced = (_: void) => this.peek(this.pos)
  seek = (p: number) => new TokenSeqParser(this.tokenSeq, p)
  next = (_: void) => this.seek(this.pos + 1)
}

import * as syntaxSchemaJson from './syntax/stypContext.json'

const contextFlow = JSON.parse(JSON.stringify(syntaxSchemaJson))

type ArrowTokenType =
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

interface SyntaxSchema {
  token: ArrowTokenType
  state: string
}

import * as ARRAY from 'fp-ts/Array'

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

type StypContextType = typeof stypContextTypes[number]

interface ParseResult {
  token: string
  valid: boolean
  pos: number
}

interface NextState {
  parser: TokenSeqParser
  context: SyntaxSchema[]
}

const flashError = (message: string) => {
  console.error(pe.render(new Error(message)))
}

/**
  checker: (p: ParseResult[]) => State<ParseResult[], TokenSeqParser>
  init   : (t: TokenSeqParser) => State<ParseResult[], TokenSeqParser>
 */
const syntaxChecker = (
  stypContextType: StypContextType,
  parser: TokenSeqParser
) => {
  const validContext = contextFlow[stypContextType]

  const initialState = {
    parser: parser,
    context: validContext,
  }

  const judgeValid = (exceptToken: ArrowTokenType, targetToken: string) => {
    if (exceptToken === 'alphabet' && targetToken.match(/^[a-zA-Z]+$/g)) {
      return true
    }
    if (
      exceptToken === 'allowUnderline' &&
      targetToken.match(/^[a-zA-Z_]+$/g)
    ) {
      return true
    }
    if (exceptToken === 'allowHyphen' && targetToken.match(/^[a-zA-Z\-]+$/g)) {
      return true
    }
    if (_.isArray(exceptToken) && exceptToken.includes(targetToken)) {
      return true
    }
    if (_.has(exceptToken, 'regexp')) {
      const token = exceptToken as { regexp: string }
      if (targetToken.match(new RegExp(token.regexp, 'g'))) {
        return true
      }
    }
    if (_.has(exceptToken, 'stop')) {
      const token = exceptToken as { stop: string[] }
      if (token.stop.includes(targetToken)) {
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
      flashError(`[Syntax Error] unexpected token: ${targetToken}`)
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
  return parser.tokenSeq.reduce((prevChecker: [ParseResult[], NextState]) => {
    const [result, next] = prevChecker
    return next.context.length === 0 ? prevChecker : checker(result)(next)
  }, initializer(initialState))
}

import { P } from 'ts-pattern'
import * as EITHER from 'fp-ts/Either'

interface ParseLog {
  classification: StypContextType
  tokens: ParseResult[]
}

const syntaxParser =
  (prevRoute: StypContextType) =>
  (history: ParseLog[]) =>
  (nextParser: TokenSeqParser) => {
    const nextToken = nextParser.traced().value
    const nextNextToken = nextParser.next().traced().value
    const contextCompass = match(prevRoute as StypContextType)
      .with('START', () => EITHER.right('BEGIN_tag'))
      .with('BEGIN_tag', () => {
        return match([nextToken, nextNextToken])
          .with(['<', '/'], () => EITHER.right('END_tag'))
          .with(['<', P._], () => EITHER.right('BEGIN_tag'))
          .with(['{', '{'], () => EITHER.right('BEGIN_css'))
          .otherwise(() => EITHER.left('ERROR'))
      })
      .with('END_tag', () => {
        return match([nextToken, nextNextToken])
          .with(['<', '/'], () => EITHER.right('END_tag'))
          .with(['<', P._], () => EITHER.right('BEGIN_tag'))
          .otherwise(() => EITHER.left('EOF'))
      })
      .with('BEGIN_css', () => {
        return match(nextToken)
          .with('}', () => EITHER.right('END_css'))
          .otherwise(() => EITHER.right('CSS_property'))
      })
      .with('CSS_property', () => EITHER.right('CSS_value'))
      .with('CSS_value', () => {
        return match([nextToken, nextNextToken])
          .with(['}', P._], () => EITHER.right('CSS_END_nesting'))
          .with([P.union(',', '}'), '}'], () => EITHER.right('END_css'))
          .with([P.when(t => /^[_:@&]+[a-zA-Z_]+$/g.test(t)), ':'], () =>
            EITHER.right('CSS_BEGIN_nesting')
          )
          .otherwise(() => EITHER.right('CSS_property'))
      })
      .with('CSS_BEGIN_nesting', () => {
        return match(nextToken)
          .with('}', () => EITHER.right('CSS_END_nesting'))
          .otherwise(() => EITHER.right('CSS_property'))
      })
      .with('CSS_END_nesting', () => {
        return match(nextToken)
          .with(P.union(',', '}'), () => EITHER.right('END_css'))
          .otherwise(() => EITHER.right('CSS_property'))
      })
      .with('END_css', () => EITHER.right('END_tag'))
      .otherwise(() => EITHER.left('ERROR'))
    const onRight = (route: StypContextType): ParseLog[] => {
      const [result, next] = syntaxChecker(route, nextParser)
      history = [
        ...history,
        {
          classification: route,
          tokens: result,
        },
      ]
      const last = _.last(result) as ParseResult
      if (last.pos === next.parser.tokenSeq.length - 1) {
        return history
      }
      return syntaxParser(route)(history)(next.parser)
    }
    const onLeft = (badType: string) => {
      if (badType === 'ERROR') {
        flashError(`[Syntax Error] Contextually Invalid Token Sequence`)
      }
      return history
    }
    return EITHER.match(
      onLeft,
      onRight
    )(contextCompass as EITHER.Either<StypContextType, StypContextType>)
  }

const parseStart = (tokenSeq: Token[]) =>
  syntaxParser('START')([])(new TokenSeqParser(tokenSeq))

const parsedStyp = parseStart(stypTokenSeq)
const parsedStypJson = jsonFormat(parsedStyp, config_jsonFormat)
new ShellString(parsedStypJson).to('tmp/parsedStyp.json')

const parsedJsx = parseStart(jsxTokenSeq)
const parsedJsxJson = toJson(parsedJsx)
new ShellString(parsedJsxJson).to('tmp/parsedJsx.json')

/* -------------------------------------------------------------------------- */

/*

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
  dot.setProperty(cssObjCollection, currentPath.join('.'), normalize)
  return node
}

const CSS_value = (node: AstNode) => {
  const normalize = node.body.length === 0 ? '""' : node.body
  dot.setProperty(cssObjCollection, currentPath.join('.'), normalize)
  currentPath.pop()
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

/**
TODO CSSの宣言順序保証問題をどうにかする
 */

/* -------------------------------------------------------------------------- */

/*

const rebuildJsx = convert.js2xml(jsxTree, {
  compact: true,
})

import * as Diff from 'diff'
import { isValid } from 'date-and-time'

const diffJsx = Diff.diffWords(jsx, rebuildJsx)

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
