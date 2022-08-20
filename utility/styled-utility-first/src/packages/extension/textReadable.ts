import * as CSST from 'csstype'
import { getPropType, Required } from 'react-tsx-props'
import { mixinBuilder } from './helper/mixinMaker'

const conf = {
  whiteSpace: Required<CSST.Property.WhiteSpace>(),
  wordWrap: Required<CSST.Property.WordWrap>(),
  textTransform: Required<CSST.Property.TextTransform>(),
  textOverflow: Required<CSST.Property.TextOverflow>(),
  textRendering: Required<CSST.Property.TextRendering>(),
}

type Conf = typeof conf

export type TextReadableProps = getPropType<Conf>
export const textReadableMixin = mixinBuilder<TextReadableProps, Conf>(conf)
export const textReadableProps = Object.keys(conf)
