import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'

export const triggerOptions = ['hover', 'none'] as const
export type TriggerOptions = typeof triggerOptions[number]

const conf = {
  trigger: NotRequired<TriggerOptions>('hover'),
}
type Conf = typeof conf

export type EffectProps = getPropType<Conf>
export const defaultEffectProps = {
  ...getDefaultProps<EffectProps>(conf),
}
