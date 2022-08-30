import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'
import * as CSST from 'csstype'

//export const triggerOptions = ['hover', 'none'] as const
//export type TriggerOptions = typeof triggerOptions[number]

const conf = {
  //trigger: NotRequired<TriggerOptions>('hover'),
  duration: NotRequired<number>(0.3),
}
type Conf = typeof conf

export type EffectProps = getPropType<Conf>
export const defaultEffectProps = {
  ...getDefaultProps<EffectProps>(conf),
}
