import _ from 'lodash'
import { ComponentPropsWithRef, ElementType } from 'react'

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>['ref']

type AsProp<C extends import('react').ElementType> = {
  as: C
}

type PropsToOmit<C extends import('react').ElementType, P> = keyof (AsProp<C> &
  P)

// This is the first reusable type utility we built
export type PolymorphicComponentProp<
  C extends import('react').ElementType,
  Props = {}
> = import('react').PropsWithChildren<Props & AsProp<C>> &
  Omit<
    import('react').ComponentPropsWithoutRef<
      C extends import('styled-components').AnyStyledComponent
        ? import('styled-components').StyledComponentInnerComponent<C>
        : C
    >,
    PropsToOmit<C, Props>
  >

export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> }
