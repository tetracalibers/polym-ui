import React, { ComponentPropsWithoutRef, ReactNode } from 'react'
import {
  AnyStyledComponent,
  StyledComponent,
  StyledComponentInnerComponent,
  StyledComponentProps,
} from 'styled-components'
import { TagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import { getStyledElement } from './styled'

type AsProp<C extends React.ElementType> = {
  as: C
}

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

// This is the first reusable type utility we built
type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<
    React.ComponentPropsWithoutRef<
      C extends AnyStyledComponent ? StyledComponentInnerComponent<C> : C
    >,
    PropsToOmit<C, Props>
  >

export type PointedTagProps<As extends React.ElementType> =
  PolymorphicComponentProp<As, CharacterProps>

export type PointedTagComponent = <As extends React.ElementType = 'span'>(
  props: PointedTagProps<As>
) => React.ReactElement | null

export const defaultProps = {
  ..._defaultProps,
  as: 'div' as React.ElementType,
  children: '' as ReactNode,
}

export const PointedTag: PointedTagComponent = <
  As extends React.ElementType = 'span'
>({
  as,
  children,
  ...props
}: PointedTagProps<As>) => {
  const StyledElement = getStyledElement<As>(as) as AnyStyledComponent
  return <StyledElement {...props}>{props.children}</StyledElement>
}
