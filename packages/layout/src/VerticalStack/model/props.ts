import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {
  // 入れ子要素に対しても再帰的にmargin挿入するか
  recursive: NotRequired<boolean>(false),
  // これより下のボックスをボックス下部にまとめるために隙間を開けるbreak point
  separateFrom: NotRequired<number>(0),
  spaceV: NotRequired<number>(1.7),
  spaceU: NotRequired<CssStyle.Unit.Length>('rem'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
