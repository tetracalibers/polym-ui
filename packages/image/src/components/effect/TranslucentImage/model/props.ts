import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../model/props'
import { CssStyle } from 'ts-typedef-helper'
import { defaultEffectProps, EffectProps } from '../../model/props'

const conf = {
  opacity: NotRequired<number>(0.8),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & EffectProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...defaultEffectProps,
}
