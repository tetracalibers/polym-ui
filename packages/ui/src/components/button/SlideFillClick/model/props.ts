import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'

export const slideOptions = [
  'Down',
  'Up',
  'LtoR',
  'RtoL',
  'FromCenter',
  //'mergeLine',
  //'traceMergeLine',
  //'enclose',
] as const

type SlideOptions = typeof slideOptions[number]

const conf = {
  slide: NotRequired<SlideOptions>('LtoR'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf>
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
