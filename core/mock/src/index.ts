import _ from 'lodash'
import * as AryDiff from 'fast-array-diff'
import * as dot from 'dot-prop'
import * as Diff from 'diff'
import { dumpJson, logJson, toJson } from './util/json'
import { stypSentence, jsxSentence } from './syntax/formatter/parseLogCleansing'

/* -------------------------------------------------------------------------- */

import * as EITHER from 'fp-ts/Either'
import * as ARRAY from 'fp-ts/Array'

stypSentence.map((record: StylePatch.Sentence) => {
  const { tokens, classify } = record
  if (tokens.includes('<StylePatch>')) {
    return EITHER.left('skip')
  }
  if (classify === 'BEGIN_tag') {
    const [, tagName, ...rest] = tokens
    if (rest.length > 1) {
      const props = ARRAY.dropRight(1)(rest)
      if (props.includes('className')) {
        const classStartIdx = _.indexOf(props, 'className')
        const [otherProps, classNameProps] = ARRAY.splitAt(classStartIdx)(props)
        const [_className, _equal, className] = classNameProps
      }
    }
  }
})

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
//dumpJson(newSrc)(
//  componentRootPath.replace(
//    basename(componentRootPath),
//    'generated/' + basename(componentRootPath)
//  )
//)
