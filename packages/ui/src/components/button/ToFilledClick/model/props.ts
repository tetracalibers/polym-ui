import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'

export const buttonTypeOptions = ['submit', 'reset', 'button'] as const
type ButtonTypeOptions = typeof buttonTypeOptions[number]

export const fillMotionOptions = [
  'slideDown',
  'slideUp',
  'slideLtoR',
  'slideRtoL',
  'spread',
  //'mergeLine',
  //'traceMergeLine',
  //'enclose',
] as const

type FillMotionOptions = typeof fillMotionOptions[number]

const conf = {
  fillMotion: NotRequired<FillMotionOptions>('slideLtoR'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
