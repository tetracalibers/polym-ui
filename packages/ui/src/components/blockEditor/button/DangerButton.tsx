import { ReactNode, SyntheticEvent } from 'react'
import { Button, ButtonCoreProps } from '../../core/Button/core'
import { StyleBaseClickProps } from '../../core/Button/styleBase'
import { GradientStyleProps, withGradient } from '../../hoc/gradient'
import { withHoverRipple } from '../../hoc/hover/ripple'
import { Text } from '../../Text'

export type DangerButtonProps = {
  children: ReactNode
  onClick?: (e: SyntheticEvent<HTMLButtonElement>, ...args: unknown[]) => void
}

const StyledButton = withHoverRipple(withGradient(Button.StyleBase))

export const DangerButton = ({ children, onClick }: DangerButtonProps) => {
  return (
    <StyledButton<StyleBaseClickProps<ButtonCoreProps> & GradientStyleProps>
      onClick={e => onClick && onClick(e)}
      paddingXV={2}
      paddingYV={0.5}
      g_colors={['#ff416c', '#ff4b2b']}
    >
      <Text.Fire fontSizeV={1.25} color='#fff'>
        {children}
      </Text.Fire>
    </StyledButton>
  )
}
