import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette as $, ResetCss } from 'styled-utility-first'
import { CssStyle } from 'ts-typedef-helper'

export const slideOptions = [
  'Down',
  'Up',
  'LtoR',
  'RtoL',
  'FromCenter',
  //'mergeLine',
  //'traceMergeLine',
  //'enclose',
] as const

type SlideOptions = typeof slideOptions[number]

const conf = {
  /* effect -> animation ------------------------ */
  slide: NotRequired<SlideOptions>('LtoR'),
  animatedBgColor: NotRequired<CSST.Property.BackgroundColor>($.grayScale.dark),
  animatedColor: NotRequired<CSST.Property.Color>($.grayScale.light),
  animateLineThickness: NotRequired<number>(1.5),
  duration: NotRequired<number>(0.6),
  /* css ---------------------------------------- */
  borderColor: NotRequired<CSST.Property.BorderColor>($.pastel.purple),
  borderWidth: NotRequired<number>(1),
  paddingYV: NotRequired<number>(1),
  paddingYU: NotRequired<CssStyle.Unit.Length>('em'),
  paddingXV: NotRequired<number>(2),
  paddingXU: NotRequired<CssStyle.Unit.Length>('em'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
