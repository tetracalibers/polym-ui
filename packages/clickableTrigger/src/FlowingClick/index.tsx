import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { FlowingButton, FlowingLink } from './styled/FlowingStyled'
import { _defaultProps, CharacterProps } from './model/props'
import { HtmlTagType } from '../common/props'
import { StyledComponent } from 'styled-components'

export type FlowingClickProps = {
  children: ReactNode
} & CharacterProps

export const defaultProps = {
  ..._defaultProps,
  children: '',
}

const FlowingClick = <As extends HtmlTagType>(
  { as, ...props }: FlowingClickProps = { ...defaultProps },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  const StyledClickElement: StyledComponent<HtmlTagType, {}> =
    as === 'button' ? FlowingButton : FlowingLink
  return (
    <StyledClickElement {...props} {...attrs}>
      <span>{props.children}</span>
    </StyledClickElement>
  )
}

export default FlowingClick as FC<FlowingClickProps>
