import type { CssInJs } from 'classified-csstypes'
import _ from 'lodash'
import * as AryDiff from 'fast-array-diff'
import * as dot from 'dot-prop'
import * as Diff from 'diff'
import { dumpJson, logJson, toJson } from './util/json'
import { stypSentence, jsxSentence } from './syntax/formatter/parseLogCleansing'
import { alphanumericId, numberId } from './util/id'
import * as prefixs from './syntax/config/prefix.json'

/* -------------------------------------------------------------------------- */

import * as EITHER from 'fp-ts/Either'
import * as ARRAY from 'fp-ts/Array'
import { match } from 'ts-pattern'

class Pointor {
  constructor(sentenceSeq: StylePatch.Sentence[], pos = 0) {
    this.pos = pos
    this.sentenceSeq = sentenceSeq
  }
  pos
  sentenceSeq
  peek = (pos: number) => this.sentenceSeq[pos]
  traced = (_: void) => this.peek(this.pos)
  seek = (p: number) => new Pointor(this.sentenceSeq, p)
  next = (_: void) => this.seek(this.pos + 1)
}

const stypPointer = new Pointor(stypSentence)
const jsxPointer = new Pointor(jsxSentence)

type TraverseState = [Pointor]

type CssBlock = [string, CssInJs]

// prettier-ignore
const cssBuilder 
  = (prevState: [CssBlock[], Pointor]): [CssBlock[], Pointor] => {
  const [cssBlocks, currPointer] = prevState
  const [archive, [prevCss]] = ARRAY.splitAt(cssBlocks.length - 1)(cssBlocks)
  const [prevSelector, prevProperties] = prevCss
  const { classify, tokens } = currPointer.traced()
  const [name] = tokens
  const nextPointer = currPointer.next()
  return match(classify)
    .with('CSS_property', () => {
      const { tokens: valueTokens } = nextPointer.traced()
      const value = ARRAY.dropRight(1)(valueTokens).join(' ')
      const properties = dot.setProperty(prevProperties, name, value)
      return cssBuilder([[...archive, [prevSelector, properties]], nextPointer])
    })
    .with('CSS_BEGIN_nesting', () => {
      const validSelectorName = name
        .replaceAll('__', '::')
        .replaceAll('_', ':')
        .replaceAll('_at_', '@')
        .replace(/^:/, '&:')
      return cssBuilder([[...cssBlocks, [validSelectorName, {}]], nextPointer])
    })
    .with('CSS_END_nesting', () => {
      return cssBuilder([cssBlocks, nextPointer])
    })
    .otherwise(() => [cssBlocks, nextPointer])
}

type Tag = {
  name: string
  className: unknown[]
  props: string[]
  styp: CssBlock[]
}

// prettier-ignore
const iterationUnit 
  = (prevState: [Map<string, Tag>, Pointor]): [Map<string, Tag>, Pointor] => {
  const [archive, pointer] = prevState
  const { tokens, classify } = pointer.traced()
  let nextPointor = pointer.next()

  return match(classify)
    .with('BEGIN_tag', () => {
      const [_gourmet, tagName, ...rest] = tokens
      let tagMeta: Tag = {
        name: tagName,
        className: [],
        props: [],
        styp: [],
      }
      if (tagName === 'StylePatch') {
        return iterationUnit([new Map(), nextPointor])
      }
      if (rest.length > 1) {
        const props = ARRAY.dropRight(1)(rest)
        if (props.includes('className')) {
          const classStartIdx = _.indexOf(props, 'className')
          const [otherProps, classNameProps] =
            ARRAY.splitAt(classStartIdx)(props)
          const [_className, _equal, className] = classNameProps
          dot.setProperty(tagMeta, 'props', otherProps)
          dot.setProperty(tagMeta, 'className', className)
        }
      }
      if (nextPointor.traced().classify === 'BEGIN_css') {
        const cssStart = nextPointor.next()
        const [cssBlocks, nextPointorAfterCss] = cssBuilder([[], cssStart])
        dot.setProperty(tagMeta, 'styp', cssBlocks)
        nextPointor = nextPointorAfterCss
      }
      const id = prefixs.styp + alphanumericId()
      return iterationUnit([archive.set(id, tagMeta), nextPointor])
    })
    .otherwise(() => [archive, nextPointor])
}

const sentenceTraverser = () => {}

/* -------------------------------------------------------------------------- */

//onst comparePredicate = (
// jsxRecord: StylePatch.ClassifyTokens,
// stypRecord: StylePatch.ClassifyTokens
// => {
// return jsxRecord.tokens.join('') === stypRecord.tokens.join('')
//
//
//onst diff = AryDiff.diff(jsxTokens, stypTokens, comparePredicate)
//umpJson(diff)('tmp/diff.json')

/* -------------------------------------------------------------------------- */
/*

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

/* -------------------------------------------------------------------------- */

/** 
const jsxRegexp = /<(StylePatch)>(?<jsx>.*?)<\/\1>/

const { cat } = shell

const oldSrc = cat(componentRootPath).toString()

const oldJsx = jsxRegexp.exec(oldSrc.replace(/\r?\n/g, ''))?.groups?.jsx

const newSrc =
  oldJsx !== undefined ? oldSrc.replace(_.trim(oldJsx), newJsx) : oldSrc

*/
//dumpJson(newSrc)(
//  componentRootPath.replace(
//    basename(componentRootPath),
//    'generated/' + basename(componentRootPath)
//  )
//)
