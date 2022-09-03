import { cloneElement, forwardRef, ReactElement, useMemo } from 'react'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'
import { Button, ButtonCoreProps } from '../../core/Button'
import { CharacterProps } from './model/props'
import { STyledButton } from './styled'

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
    <STyledButton ref={ref} {...superProps}>
      {iconForA11y}
      <VisuallyHidden>{label}</VisuallyHidden>
    </STyledButton>
  )
}

export const IconClick = {
  Button: forwardRef<HTMLElement, IconButtonProps>(_IconButton),
}
