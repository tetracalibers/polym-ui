import { ReactNode, SyntheticEvent } from 'react'
import { Button, ButtonCoreProps } from '../../core/Button/core'
import { StyleBaseClickProps } from '../../core/Button/styleBase'
import { GradientStyleProps, withGradient } from '../../hoc/gradient'
import { withHoverRipple } from '../../hoc/hover/ripple'
import { Text } from '../../Text'

export type CancelButtonProps = {
  children?: ReactNode
  onClick?: (e: SyntheticEvent<HTMLButtonElement>, ...args: unknown[]) => void
}

const StyledButton = withHoverRipple(withGradient(Button.StyleBase))

export const CancelButton = ({
  children = 'Cancel',
  onClick,
}: CancelButtonProps) => {
  return (
    <StyledButton<StyleBaseClickProps<ButtonCoreProps> & GradientStyleProps>
      onClick={e => onClick && onClick(e)}
      paddingXV={2}
      paddingYV={0.5}
      g_colors={['#E0EAFC', '#CFDEF3', '#E0EAFC']}
      g_stops={[0, 51, 100]}
      borderRadiusV={1}
    >
      <Text fontSizeV={1.25} color='#4d608b'>
        {children}
      </Text>
    </StyledButton>
  )
}
