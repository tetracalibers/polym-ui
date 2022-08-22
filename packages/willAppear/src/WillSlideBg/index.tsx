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
  { as, ...props }: WillSlideBgProps = { ...defaultProps },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  return (
    <SlideBackground as={as} {...props} {...attrs}>
      <ChildrenWrapper>{props.children}</ChildrenWrapper>
    </SlideBackground>
  )
}
