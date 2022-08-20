import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { FlowingStyled } from '../style/Flowing'
import { flowingButtonDefaultProps, FlowingButtonProps } from '../model/props'

type ThisProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & FlowingButtonProps

const FlowingButton: FC<ThisProps> = ({
  children,
  preset,
  borderWidth = flowingButtonDefaultProps.borderWidth,
  borderStyle = flowingButtonDefaultProps.borderStyle,
  borderColor = flowingButtonDefaultProps.borderColor,
  color = flowingButtonDefaultProps.color,
  backgroundColor = flowingButtonDefaultProps.backgroundColor,
  transitionDuration = flowingButtonDefaultProps.transitionDuration,
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
