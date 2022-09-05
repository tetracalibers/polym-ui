import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'

export const buttonTypeOptions = ['submit', 'reset', 'button'] as const
type ButtonTypeOptions = typeof buttonTypeOptions[number]

const conf = {
  type: NotRequired<ButtonTypeOptions>('button'),
}
type Conf = typeof conf

export type ButtonCharacterProps = getPropType<Conf>
export const defaultButtonCharacterProps = {
  ...getDefaultProps<ButtonCharacterProps>(conf),
}
