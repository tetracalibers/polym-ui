import React, { ReactNode } from 'react'
import { AnyStyledComponent } from 'styled-components'
import { CharacterProps, _defaultProps } from './model/props'
import { PolymorphicComponentProp } from '../common/polymorphic'
import { getStyledElement } from './styled'

export type PointedTagProps<As extends React.ElementType> =
  PolymorphicComponentProp<As, CharacterProps>

export type PointedTagComponent = <As extends React.ElementType = 'span'>(
  props: PointedTagProps<As>
) => React.ReactElement

export const defaultProps = {
  ..._defaultProps,
  as: 'div' as React.ElementType,
  children: '' as ReactNode,
}

export const PointedTag: PointedTagComponent = <As extends React.ElementType>({
  as,
  children,
  ...props
}: PointedTagProps<As>) => {
  const StyledElement = getStyledElement<As>(as) as AnyStyledComponent
  return <StyledElement {...props}>{children}</StyledElement>
}
