import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../model/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'
import { CssStyle } from 'ts-typedef-helper'
import { defaultEffectProps, EffectProps } from '../../model/props'

export const modeOptions = ['enlarge', 'shrink']
type ModeOptions = typeof modeOptions[number]

const conf = {
  mode: NotRequired<ModeOptions>('enlarge'),
  withRotate: NotRequired<boolean>(false),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> &
  CommonProps &
  StyleProps &
  EffectProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
  ...defaultEffectProps,
}
