import React, { ComponentType } from 'react'
import { getDefaultProps, getPropType } from 'react-tsx-props'
import {
  IntrinsicElementsKeys,
  StyledComponent,
  StyledComponentBase,
} from 'styled-components'

export type TagType = React.ElementType

const conf = {}
type Conf = typeof conf

export type CommonProps = getPropType<Conf>
export const commonDefaultProps = {
  ...getDefaultProps<CommonProps>(conf),
}
