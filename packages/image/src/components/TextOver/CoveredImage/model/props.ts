import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../model/props'
import { CssStyle } from 'ts-typedef-helper'
import {
  defaultTextOverImageProps,
  TextOverImageProps,
} from '../../common/props'

export const motionTypeOptions = [
  'fade',
  'slideUp',
  'slideDown',
  'slideLtoR',
  'slideRtoL',
  'spreadHorizontal',
  'spreadVertical',
] as const
type MotionTypeOptions = typeof motionTypeOptions[number]

export const triggerOptions = ['hover', 'none'] as const
export type TriggerOptions = typeof triggerOptions[number]

const conf = {
  motionType: NotRequired<MotionTypeOptions>('fade'),
  bgDuration: NotRequired<number>(0.3),
  txtDuration: NotRequired<number>(0.5),
  bgOpacity: NotRequired<number>(0.7),
  imgPaddingV: NotRequired<number>(1.5),
  imgPaddingU: NotRequired<CssStyle.Unit.Length>('rem'),
  trigger: NotRequired<TriggerOptions>('hover'),
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
