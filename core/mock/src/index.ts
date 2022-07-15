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
` //.replaceAll(/[\r\n\t]/g, '')

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
  return !value.includes('\n')
})
const jstokenJson = jsonFormat(tokenSequence, config_jsonFormat)

new ShellString(jstokenJson).to('tmp/jstoken.json')

/* -------------------------------------------------------------------------- */

import * as STORE from 'fp-ts/Store'
import * as STATE from 'fp-ts/State'
import * as TRACED from 'fp-ts/Traced'

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

type SyntaxToken = {
  classification: string
  body: string
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

const chain: <E, A, B>(
  f: (a: A) => STATE.State<E, B>
) => (fa: STATE.State<E, A>) => STATE.State<E, B> = f => generate => seed => {
  const [a, seed2] = generate(seed)
  const [b, seed3] = f(a)(seed2)
  return [b, seed3]
}

/**
  checker: (p: ParseResult[]) => State<ParseResult[], TokenSeqParser>
  init   : (t: TokenSeqParser) => State<ParseResult[], TokenSeqParser>
 */
const syntaxChecker = (contextType: ContextType) => {
  let validContext = contextFlow[contextType]

  const checker = (prev: ParseResult[]) => (parser: TokenSeqParser) => {
    const { token: exceptToken } = _.first(validContext) as SyntaxSchema
    const targetToken = parser.traced().value
    console.log(exceptToken, targetToken)
    const nextParser = parser.next()
    const curr = {
      token: targetToken,
      valid: exceptToken === 'any' || exceptToken.includes(targetToken),
      pos: parser.pos,
      except: validContext,
    } as ParseResult
    return [ARRAY.concat([curr])(prev), nextParser] as [
      ParseResult[],
      TokenSeqParser
    ]
  }
  const initializer = checker([] as ParseResult[])

  return chain(checker)(initializer)(new TokenSeqParser())
}

console.log(syntaxChecker('BEGIN_file'))

/*

import { isLowerCase } from 'is-lower-case'

const state = tokenSequence.map((token: Token) => {
  const { type, value } = token
  if (value === '<') {
    return ['settled', '']
  }
  if (value === '>') {
    return ['pending', '']
  }
  return ['settled', value]
})

import * as ARRAY from 'fp-ts/Array'

console.log(state)

/*

import * as OPTION from 'fp-ts/Option'
import * as STATE_T from 'fp-ts/StateT'

const evaluate = STATE.evaluate(OPTION.Functor)

import * as CHAIN from 'fp-ts/Chain'
import type { Applicative2 } from 'fp-ts/lib/Applicative'
import type { Chain2 } from 'fp-ts/lib/Chain'
import type { Functor2 } from 'fp-ts/lib/Functor'

const URI2 = 'StateOption'
type URI2 = typeof URI2

type StateOption<S, A> = STATE_T.StateT1<'Option', S, A>

// 型クラスインスタンスを作るためURItoKindに登録する
declare module 'fp-ts/lib/HKT' {
  interface URItoKind2<E, A> {
    readonly [URI2]: StateOption<E, A>
  }
}

// 型クラスのメソッドを作る
// 'fp-ts/StateT'から提供されてるメソッドにより簡略化できる
const map = STATE_T.map(OPTION.Functor)
const ap = STATE_T.ap(OPTION.Chain)
const of = STATE_T.of(OPTION.Pointed)
const chain = STATE_T.chain(OPTION.Chain)

// 各インスタンスを作る
// ST.mapによって作られる`map`とは引数のもらい方が違うため調整する
const Functor: Functor2<URI2> = {
  URI: URI2,
  map: <E, A, B>(ma: StateOption<E, A>, f: (a: A) => B): StateOption<E, B> => {
    return map(f)(ma)
  },
}

// map同様引数を調整する
const Applicative: Applicative2<URI2> = {
  ...Functor,
  of,
  ap: <E, A, B>(
    fab: StateOption<E, (a: A) => B>,
    fa: StateOption<E, A>
  ): StateOption<E, B> => {
    return ap(fa)(fab)
  },
}

// map同様...
const Chain: Chain2<URI2> = {
  ...Applicative,
  chain: <E, A, B>(
    fa: StateOption<E, A>,
    f: (a: A) => StateOption<E, B>
  ): StateOption<E, B> => {
    return chain(f)(fa)
  },
}

// Chainの制約付きのbindを作る関数`C.bind`を使ってbind関数を作る
const bind = CHAIN.bind(Chain)

const fromState = STATE_T.fromState(OPTION.Pointed)

const get = <S>() => fromState<S, S>(STATE.get<S>())
const put = <S>(s: S) => fromState<S, void>(STATE.put<S>(s))

// 与えられた関数の処理を後続する関数に繋がないための関数
const chainFirst = CHAIN.chainFirst(Chain)

/*

type S = { hello: string }
console.log(
  evaluate({ hello: 'world' })(
    pipe(
      of<number, S>(1),
      bind('before', () => {
        return get()
      }),
      // `put`は`State s Option void`を返すため`chain`で繋ぐとそれまでの処理が捨てられるので、`chainFirst`を使う
      chainFirst(() => {
        return put({ hello: 'fp-ts' })
      }),
      bind('after', () => {
        return get()
      })
    )
  )
)

/*

const tokenClassification = (_token: string) => {
  // token === 'StylePatch'
  // token === all lowercase
  // token === capitalize
  return ''
}

import * as ARRAY from 'fp-ts/Array'

const astBuildProgress =
  (currToken: string) =>
  (classification: string) =>
  (collection: SyntaxToken[]): [SyntaxToken[], string] => {
    const currSyntax = {
      classification: classification,
      body: currToken,
    }
    const newCollection = _.union(collection, [currSyntax])
    //console.log(newCollection)
    if (currSyntax.body === '>') {
      return [newCollection, 'found']
    } else {
      return [newCollection, 'continue']
    }
  }

const astNodeBuilder = {
  tag: (
    syntaxTokenCollection: SyntaxToken[],
    token: Token
  ): [SyntaxToken[], string] => {
    const [collection, status] = astBuildProgress(token.value)(
      tokenClassification(token.value)
    )(syntaxTokenCollection)
    //console.log(collection)
    return [collection, status]
  },
}

const tokenMatcher = (cursor: number, collec = [] as SyntaxToken[]) => {
  const token = tokenSequenceParser.peek(cursor)
  //console.log(token)
  let [updatedCollec, status] = astNodeBuilder.tag(collec, token)
  //.otherwise(() => [collec, 'continue'])
  STORE.seek(cursor + 1)(tokenSequenceParser)
  return match(status)
    .with('found', () => updatedCollec)
    .otherwise(() => tokenMatcher(cursor + 1, updatedCollec))
  //.otherwise(() => [[], []])
}

const res = tokenSequence.map((_, cursor) => tokenMatcher(cursor))

const resJson = jsonFormat(res, config_jsonFormat)

//console.log(resJson)

/* -------------------------------------------------------------------------- */

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

new ShellString(json).to('tmp/ast.json')

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
tokens.map((node: AstNode) => controller(node))

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
