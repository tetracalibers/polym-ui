import * as CSST from 'csstype'
import { css } from 'styled-components'
import { makeMixin } from './helper/mixinMaker'
import { Exist } from '../dynamic/conditional'
import _ from 'lodash'
import { getDefaultProps, getPropType, Required, $ } from 'react-tsx-props'

export type TextDecorationProps = {
  /* textDecoration ----------------------------- */
  textDecoration: CSST.Property.TextDecoration
  textDecorationColor: CSST.Property.TextDecorationColor
  textDecorationLine: CSST.Property.TextDecorationLine
  textDecorationSkip: CSST.Property.TextDecorationSkip
  textDecorationSkipInk: CSST.Property.TextDecorationSkipInk
  textDecorationStyle: CSST.Property.TextDecorationStyle
  textDecorationThickness: CSST.Property.TextDecorationThickness
  /* textUnderline ------------------------------ */
  textUnderlineOffset: CSST.Property.TextUnderlineOffset
  textUnderlinePosition: CSST.Property.TextUnderlinePosition
}

const conf = {
  textDecoration: Required<CSST.Property.TextDecoration>(),
}

type Props = getPropType<typeof conf>

export const textDecorationMixin = {
  textDecoration: makeMixin<Props>('textDecoration'),
}
