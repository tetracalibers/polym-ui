import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { StyledComponent } from 'styled-components'
import { HtmlTagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import { RotatingButton, RotatingLink } from './styled/RotatingStyled'

type RotatingClickProps = Omit<
  {
    beforeChild: ReactNode
    afterChild: ReactNode
  } & CharacterProps,
  'children'
>

export const defaultProps = {
  ..._defaultProps,
  beforeChild: '',
  afterChild: '',
}

const RotatingClick = <As extends HtmlTagType>(
  { as, ...props }: RotatingClickProps = { ...defaultProps },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  const StyledClickElement: StyledComponent<HtmlTagType, {}> =
    as === 'button' ? RotatingButton : RotatingLink
  return (
    <StyledClickElement {...props} {...attrs}>
      <span>{props.beforeChild}</span>
      <span>{props.afterChild}</span>
    </StyledClickElement>
  )
}

export default RotatingClick as FC<RotatingClickProps>
