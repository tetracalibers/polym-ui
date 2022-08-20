import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { defaultProps, RotatingButtonProps } from '../model/props'
import { RotatingStyled } from '../style/RotatingStyled'

type ThisProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & RotatingButtonProps

const RotatingButton: FC<ThisProps> = ({
  children,
  rotateTo,
  borderWidth = defaultProps.borderWidth,
  borderStyle = defaultProps.borderStyle,
  borderColor = defaultProps.borderColor,
  color = defaultProps.color,
  backgroundColor = defaultProps.backgroundColor,
  ...props
}: ThisProps) => {
  return (
    <RotatingStyled
      rotateTo={rotateTo}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderStyle={borderStyle}
      color={color}
      backgroundColor={backgroundColor}
      {...props}
    >
      <span>{children}</span>
    </RotatingStyled>
  )
}

export default RotatingButton
