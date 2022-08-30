import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'
import { CssStyle } from 'ts-typedef-helper'
import { defaultEffectProps, EffectProps } from '../../model/props'

const conf = {}
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
