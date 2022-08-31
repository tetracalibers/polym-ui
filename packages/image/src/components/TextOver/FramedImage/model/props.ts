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
  bgDuration: NotRequired<number>(0.3),
  txtDuration: NotRequired<number>(0.5),
  bgOpacity: NotRequired<number>(0.7),
  imgPadding: NotRequired<CSST.Property.Padding>('4%'),
  trigger: NotRequired<TriggerOptions>('hover'),
  bgColor: NotRequired<CSST.Property.BackgroundColor>($.grayScale.dark),
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
