import _ from 'lodash'
import { ElementType, forwardRef, ReactElement, ReactNode } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type WithSidebarProps<As extends ElementType> = Omit<
  PolymorphicComponentPropWithRef<As, CharacterProps>,
  'children'
> & {
  children: [ReactNode, ReactNode]
}

export type WithSidebarComponent = <As extends ElementType>(
  props: WithSidebarProps<As>
) => ReactElement | null

export const WithSidebar: WithSidebarComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: WithSidebarProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledElement {...props} ref={ref} as={as || 'div'}>
        {children}
      </StyledElement>
    )
  }
)
