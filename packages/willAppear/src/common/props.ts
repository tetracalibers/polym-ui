import React from 'react'
import { getDefaultProps, getPropType } from 'react-tsx-props'

export type TagType = React.ElementType

const conf = {}
type Conf = typeof conf

export type CommonProps = getPropType<Conf> & {
  as: TagType
}
export const commonDefaultProps = {
  ...getDefaultProps<CommonProps>(conf),
  as: 'div' as TagType,
}
