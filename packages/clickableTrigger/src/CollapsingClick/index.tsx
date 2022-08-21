import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { StyledComponent } from 'styled-components'
import { HtmlTagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import { StyledButton, StyledLink } from './styled'

export type CollapsingClickProps = {
  children: ReactNode
} & CharacterProps

export const defaultProps = {
  ..._defaultProps,
  children: '',
}

const CollapsingClick = <As extends HtmlTagType>(
  { as, ...props }: CollapsingClickProps = { ...defaultProps },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  const StyledClickElement: StyledComponent<HtmlTagType, {}> =
    as === 'button' ? StyledButton : StyledLink
  return (
    <StyledClickElement {...props} {...attrs}>
      <span>{props.children}</span>
    </StyledClickElement>
  )
}

export default CollapsingClick as FC<CollapsingClickProps>
