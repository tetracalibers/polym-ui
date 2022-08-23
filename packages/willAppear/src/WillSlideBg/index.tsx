import _ from 'lodash'
import { ElementType, ReactElement } from 'react'
import { AnyStyledComponent } from 'styled-components'
import { PolymorphicComponentProp } from '../common/polymorphic'
import { CharacterProps, defaultProps } from './model/props'
import { getChildrenWrapper, SlideBackground } from './styled'

export type WillSlideBgProps<As extends ElementType> = PolymorphicComponentProp<
  As,
  CharacterProps
>

export type WillSlideBgComponent = <As extends ElementType>(
  props: WillSlideBgProps<As>
) => ReactElement

export const WillSlideBg: WillSlideBgComponent = <As extends ElementType>({
  as,
  children,
  ..._props
}: WillSlideBgProps<As>) => {
  const props = _.mergeWith(
    _props,
    defaultProps,
    (input: unknown, defaul: unknown) => (_.isUndefined(input) ? defaul : input)
  )
  const { slideFrom, animationDuration, backgroundColor } = props
  const ChildrenWrapper = getChildrenWrapper<As>(as) as AnyStyledComponent

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
      >
        {children}
      </ChildrenWrapper>
    </SlideBackground>
  )
}
