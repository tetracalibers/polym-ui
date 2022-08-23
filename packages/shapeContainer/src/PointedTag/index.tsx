import React from 'react'
import { AnyStyledComponent } from 'styled-components'
import { CharacterProps, defaultProps } from './model/props'
import { mergeDefault, PolymorphicComponentProp } from '../common/polymorphic'
import { getStyledElement } from './styled'
import _ from 'lodash'

export type PointedTagProps<As extends React.ElementType> =
  PolymorphicComponentProp<As, CharacterProps>

export type PointedTagComponent = <As extends React.ElementType>(
  props: PointedTagProps<As>
) => React.ReactElement

export const PointedTag: PointedTagComponent = <As extends React.ElementType>({
  as,
  children,
  ..._props
}: PointedTagProps<As>) => {
  const props = mergeDefault(_props, defaultProps)
  const StyledElement = getStyledElement<As>(as) as AnyStyledComponent
  return <StyledElement {...props}>{children}</StyledElement>
}
