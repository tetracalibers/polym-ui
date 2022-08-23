import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic'
import { CharacterProps, defaultProps } from './model/props'
import { ChildrenWrapper, WillHorizontalLine, WillVerticalLine } from './styled'

export type WillBorderProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type WillBorderComponent = <As extends ElementType>(
  props: WillBorderProps<As>
) => ReactElement | null

export const WillBorder: WillBorderComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: WillBorderProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    const { borderColor, animationDuration } = props

    return (
      <WillHorizontalLine
        borderColor={borderColor}
        animationDuration={animationDuration}
      >
        <WillVerticalLine
          borderColor={borderColor}
          animationDuration={animationDuration}
        >
          <ChildrenWrapper
            {...props}
            animationDuration={animationDuration}
            ref={ref}
            as={as as unknown as undefined}
          >
            {children}
          </ChildrenWrapper>
        </WillVerticalLine>
      </WillHorizontalLine>
    )
  }
)
