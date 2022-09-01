import { defaultCoreProps } from './../../../core/Button/model/props'
import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'

export const buttonTypeOptions = ['submit', 'reset', 'button'] as const
type ButtonTypeOptions = typeof buttonTypeOptions[number]

const conf = {}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...defaultCoreProps,
}
