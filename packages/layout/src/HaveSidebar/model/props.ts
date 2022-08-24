import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

export const sidebarChildOptions = ['first', 'last'] as const
export type SidebarChildOptions = typeof sidebarChildOptions[number]

const conf = {
  // 2つの子要素のうち、どちらをサイドバーとみなすか
  sidebarChild: Required<SidebarChildOptions>('first'),
  // 水平方向配置におけるメインコンテンツの最小幅[%]
  mainMinWidth: Required<number>(60),
  // 垂直方向配置において、要素を本来の高さになるようにするか
  noStretch: Required<boolean>(false),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}
