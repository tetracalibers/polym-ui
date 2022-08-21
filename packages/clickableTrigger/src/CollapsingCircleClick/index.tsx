import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { StyledComponent } from 'styled-components'
import { HtmlTagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import {
  CollapsingCircleButton,
  CollapsingCircleLink,
} from './styled/CollapsingCircleStyled'

export type CollapsingCircleClickProps = {
  children: ReactNode
} & CharacterProps

export const defaultProps = {
  ..._defaultProps,
  children: '',
}

const CollapsingCircleClick = <As extends HtmlTagType>(
  { as, ...props }: CollapsingCircleClickProps = { ...defaultProps },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  const StyledClickElement: StyledComponent<HtmlTagType, {}> =
    as === 'button' ? CollapsingCircleButton : CollapsingCircleLink
  return (
    <StyledClickElement {...props} {...attrs}>
      <span>{props.children}</span>
    </StyledClickElement>
  )
}

export default CollapsingCircleClick as FC<CollapsingCircleClickProps>
