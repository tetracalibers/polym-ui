import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'
import * as CSST from 'csstype'

export const triggerOptions = ['hover', 'none'] as const
export type TriggerOptions = typeof triggerOptions[number]

const conf = {
  duration: NotRequired<number>(0.7),
}
type Conf = typeof conf

export type EffectProps = getPropType<Conf>
export const defaultEffectProps = {
  ...getDefaultProps<EffectProps>(conf),
}
