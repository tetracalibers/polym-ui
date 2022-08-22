import { ComponentType } from 'react'
import { getDefaultProps, getPropType } from 'react-tsx-props'
import { IntrinsicElementsKeys, StyledComponent } from 'styled-components'

export type TagType = StyledComponent<
  IntrinsicElementsKeys | ComponentType<any>,
  {}
>

const conf = {}
type Conf = typeof conf

export type CommonProps = getPropType<Conf> & {
  as: TagType
}
export const commonDefaultProps = {
  ...getDefaultProps<CommonProps>(conf),
  as: 'div' as TagType,
}
