import _ from 'lodash'
import { ElementType, forwardRef, ReactElement, ReactNode } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledContainer, OverlayWrapper } from './styled'

export type OverlapLayerProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps> & {
    renderOverlay: () => ReactNode
  }

export type OverlapLayerComponent = <As extends ElementType>(
  props: OverlapLayerProps<As>
) => ReactElement | null

export const OverlapLayer: OverlapLayerComponent = forwardRef(
  <As extends ElementType>(
    { as, children, renderOverlay, ..._props }: OverlapLayerProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledContainer ref={ref} as={as || 'div'}>
        {children}
        <OverlayWrapper {...props}>{renderOverlay()}</OverlayWrapper>
      </StyledContainer>
    )
  }
)
