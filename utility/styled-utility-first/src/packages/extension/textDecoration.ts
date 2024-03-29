import * as CSST from 'csstype'
import _ from 'lodash'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  /* textDecoration ----------------------------- */
  textDecoration: Required<CSST.Property.TextDecoration>(),
  textDecorationColor: Required<CSST.Property.TextDecorationColor>(),
  textDecorationLine: Required<CSST.Property.TextDecorationLine>(),
  textDecorationSkip: Required<CSST.Property.TextDecorationSkip>(),
  textDecorationSkipInk: Required<CSST.Property.TextDecorationSkipInk>(),
  textDecorationStyle: Required<CSST.Property.TextDecorationStyle>(),
  textDecorationThickness: Required<CSST.Property.TextDecorationThickness>(),
  /* textUnderline ------------------------------ */
  textUnderlineOffset: Required<CSST.Property.TextUnderlineOffset>(),
  textUnderlinePosition: Required<CSST.Property.TextUnderlinePosition>(),
}

type Conf = typeof conf

export type TextDecorationProps = getPropType<typeof conf>
export const textDecorationMixin = mixinBuilder<TextDecorationProps, Conf>(conf)
export const textDecorationProps = Object.keys(conf)
