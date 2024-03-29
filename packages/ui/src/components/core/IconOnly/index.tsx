import { cloneElement, forwardRef, ReactElement, useMemo } from 'react'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'
import { Button, ButtonCoreProps } from '../Button'
import { CharacterProps } from './model/props'

export type IconOnlyCoreProps = {
  icon: ReactElement
} & CharacterProps &
  Omit<ButtonCoreProps, 'children'>

const _IconButton = ({
  ref,
  label,
  icon,
  ...superProps
}: IconOnlyCoreProps) => {
  const iconForA11y = useMemo(
    () => cloneElement(icon, { 'aria-hidden': true }),
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
  Button: forwardRef<HTMLElement, IconOnlyCoreProps>(_IconButton),
}
