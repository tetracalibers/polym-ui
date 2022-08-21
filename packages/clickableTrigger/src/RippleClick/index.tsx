import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { HtmlTagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import { StyledClickElement } from './styled/RippleClick'

export type RippleClickProps = {
  children: ReactNode
} & CharacterProps

export const defaultProps = {
  ..._defaultProps,
  children: '',
}

const RippleClick = <As extends HtmlTagType>(
  { as, ...props }: RippleClickProps = { ...defaultProps },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  return (
    <StyledClickElement forwardedAs={as} {...props} {...attrs}>
      {props.children}
    </StyledClickElement>
  )
}

export default RippleClick as FC<RippleClickProps>
