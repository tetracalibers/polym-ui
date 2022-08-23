import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { TagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import { ChildrenWrapper, SlideBackground } from './styled'

export type WillSlideBgProps = {
  children: ReactNode
} & CharacterProps

export const defaultProps = {
  ..._defaultProps,
  children: '',
}

export const WillSlideBg = <As extends TagType>(
  {
    as,
    slideFrom,
    animationDuration,
    backgroundColor,
    ...props
  }: WillSlideBgProps = {
    ...defaultProps,
  },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  return (
    <SlideBackground
      slideFrom={slideFrom}
      animationDuration={animationDuration}
      backgroundColor={backgroundColor}
    >
      <ChildrenWrapper
        as={as}
        animationDuration={animationDuration}
        backgroundColor={backgroundColor}
        {...props}
        {...attrs}
      >
        {props.children}
      </ChildrenWrapper>
    </SlideBackground>
  )
}