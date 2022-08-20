import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { FlowingStyled } from '../style/FlowingStyled'
import { defaultProps, FlowingButtonProps } from '../model/props'

type ThisProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & FlowingButtonProps

const FlowingButton: FC<ThisProps> = ({
  children,
  preset,
  borderWidth = defaultProps.borderWidth,
  borderStyle = defaultProps.borderStyle,
  borderColor = defaultProps.borderColor,
  color = defaultProps.color,
  backgroundColor = defaultProps.backgroundColor,
  transitionDuration = defaultProps.transitionDuration,
  ...props
}: ThisProps) => {
  return (
    <FlowingStyled
      preset={preset}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderStyle={borderStyle}
      color={color}
      backgroundColor={backgroundColor}
      transitionDuration={transitionDuration}
      {...props}
    >
      <span>{children}</span>
    </FlowingStyled>
  )
}

export default FlowingButton
