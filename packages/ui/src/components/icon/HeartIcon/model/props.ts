import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {
  sizeV: NotRequired<number>(50),
  sizeU: NotRequired<CssStyle.Unit.Length>('px'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
