import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { TagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import { ChildrenWrapper, WillHorizontalLine, WillVerticalLine } from './styled'

export type WillBorderProps = {
  children: ReactNode
} & CharacterProps

export const defaultProps = {
  ..._defaultProps,
  children: '',
}

export const WillBorder = <As extends TagType>(
  { as, borderColor, ...props }: WillBorderProps = { ...defaultProps },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  return (
    <WillHorizontalLine borderColor={borderColor}>
      <WillVerticalLine borderColor={borderColor}>
        <ChildrenWrapper as={as} {...props} {...attrs}>
          {props.children}
        </ChildrenWrapper>
      </WillVerticalLine>
    </WillHorizontalLine>
  )
}
