import { cloneElement, forwardRef, ReactElement, useMemo } from 'react'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'
import { Button, ButtonCoreProps } from '../Button'
import { CharacterProps } from './model/props'

type IconButtonProps = {
  icon: ReactElement
} & CharacterProps &
  Omit<ButtonCoreProps, 'children'>

const _IconButton = ({ ref, label, icon, ...superProps }: IconButtonProps) => {
  const iconForA11y = useMemo(
    () => cloneElement(icon, { ariaHidden: true }),
    []
  )

  return (
    <Button ref={ref} {...superProps}>
      {iconForA11y}
      <VisuallyHidden>{label}</VisuallyHidden>
    </Button>
  )
}

export const IconOnly = {
  Button: forwardRef<HTMLElement, IconButtonProps>(_IconButton),
}
