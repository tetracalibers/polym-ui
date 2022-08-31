import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { StyledComponent } from 'styled-components'
import { HtmlTagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import { RippleButton, RippleLink } from './styled/RippleClick'

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
  const StyledClickElement: StyledComponent<HtmlTagType, {}> =
    as === 'button' ? RippleButton : RippleLink
  return (
    <StyledClickElement {...props} {...attrs}>
      {props.children}
    </StyledClickElement>
  )
}

export default RippleClick as FC<RippleClickProps>
