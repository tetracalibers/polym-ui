import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../model/props'
import { CssStyle } from 'ts-typedef-helper'
import * as CSST from 'csstype'
import { ColorPalette as $, Truthy } from 'styled-utility-first'
import {
  defaultTextOverImageProps,
  TextOverImageProps,
} from '../../common/props'

export const triggerOptions = ['hover', 'none'] as const
export type TriggerOptions = typeof triggerOptions[number]

const conf = {
  txtDuration: NotRequired<number>(0.5),
  drawDuration: NotRequired<number>(0.3),
  imgPadding: NotRequired<CSST.Property.Padding>('4%'),
  imgBlur: NotRequired<number>(2),
  imgOpacity: NotRequired<number>(0.5),
  imgGrayScale: NotRequired<number>(0),
  trigger: NotRequired<TriggerOptions>('hover'),
  lineColor: NotRequired<CSST.Property.BorderColor>($.grayScale.light),
  lineStyle: NotRequired<CSST.Property.BorderStyle>('solid'),
  lineThickness: NotRequired<number>(1),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> &
  CommonProps &
  TextOverImageProps

export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...defaultTextOverImageProps,
}
