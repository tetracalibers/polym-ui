import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { ChildrenWrapper, SlideBackground } from './styled'

export type WillSlideBgProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type WillSlideBgComponent = <As extends ElementType>(
  props: WillSlideBgProps<As>
) => ReactElement | null

export const WillSlideBg: WillSlideBgComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: WillSlideBgProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(
      _props,
      defaultProps,
      (input: unknown, defaul: unknown) =>
        _.isUndefined(input) ? defaul : input
    )
    const { slideFrom, animationDuration, backgroundColor } = props

    return (
      <SlideBackground
        slideFrom={slideFrom}
        animationDuration={animationDuration}
        backgroundColor={backgroundColor}
      >
        <ChildrenWrapper
          {...props}
          animationDuration={animationDuration}
          backgroundColor={backgroundColor}
          ref={ref}
          as={as as unknown as undefined}
        >
          {children}
        </ChildrenWrapper>
      </SlideBackground>
    )
  }
)
