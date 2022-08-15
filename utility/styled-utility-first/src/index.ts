/* -------------------------------------------------------------------------- */
/* PUT                                                                        */
/* -------------------------------------------------------------------------- */

import { MARGIN } from './packages/PUT/property/margin'

export namespace PUT {
  export const margin = MARGIN
}

/* -------------------------------------------------------------------------- */
/* SELECT                                                                     */
/* -------------------------------------------------------------------------- */

import { CONTINUOUS_ELEMENTS } from './packages/SELECT/selector/continuous'

export namespace SELECT {
  export const continuousE = CONTINUOUS_ELEMENTS.continuousElements
}

/* -------------------------------------------------------------------------- */
/* DYNAMIC                                                                    */
/* -------------------------------------------------------------------------- */

import { Exist, Truthy } from './packages/dynamic/conditional'

export { Exist, Truthy }
