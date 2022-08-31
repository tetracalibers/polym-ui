import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { StyledComponent } from 'styled-components'
import { HtmlTagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import {
  RippleCircleButton,
  RippleCircleLink,
} from './styled/RippleCircleStyled'

export type RippleCircleClickProps = {
  children: ReactNode
} & CharacterProps

export const defaultProps = {
  ..._defaultProps,
  children: '',
}

const RippleCircleClick = <As extends HtmlTagType>(
  { as, ...props }: RippleCircleClickProps = { ...defaultProps },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  const StyledClickElement: StyledComponent<HtmlTagType, {}> =
    as === 'button' ? RippleCircleButton : RippleCircleLink
  return (
    <StyledClickElement {...props} {...attrs}>
      <span>{props.children}</span>
    </StyledClickElement>
  )
}

export default RippleCircleClick as FC<RippleCircleClickProps>
