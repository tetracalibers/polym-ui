import * as htmlAttrsJson from './data/html-attrs.json'
import _ from 'lodash'

const htmlAttrs = JSON.parse(JSON.stringify(htmlAttrsJson))

/* -------------------------------------------- */
/* "A" AND "BUTTON"                             */
/* -------------------------------------------- */

export const Anchor$Button = {
  full: {
    a: htmlAttrs['a'],
    button: htmlAttrs['button'],
  },
  only: {
    a: _.without(htmlAttrs['a'], ...htmlAttrs['button']),
    button: _.without(htmlAttrs['button'], ...htmlAttrs['a']),
  },
}
