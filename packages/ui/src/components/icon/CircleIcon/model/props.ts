import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'
import { CssStyle } from 'ts-typedef-helper'

const conf = {
  sizeV: NotRequired<number>(100),
  sizeU: NotRequired<CssStyle.Unit.Length>('px'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
