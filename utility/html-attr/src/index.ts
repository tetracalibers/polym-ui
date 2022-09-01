import * as htmlAttrsJson from './data/html-attrs.json'
import _ from 'lodash'

const htmlAttrs = JSON.parse(JSON.stringify(htmlAttrsJson))

/* -------------------------------------------- */
/* "A" AND "BUTTON"                             */
/* -------------------------------------------- */

export const Anchor$Button = {
  full: {
    a: htmlAttrs['a'] as string[],
    button: htmlAttrs['button'] as string[],
  },
  only: {
    a: _.without(htmlAttrs['a'], ...htmlAttrs['button']) as string[],
    button: _.without(htmlAttrs['button'], ...htmlAttrs['a']) as string[],
  },
}
