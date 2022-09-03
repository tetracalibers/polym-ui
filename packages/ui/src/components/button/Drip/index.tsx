import { forwardRef } from 'react'
import { ButtonCoreProps } from '../../core/Button'
import { STyledButton } from './styled'
import { BiPlus } from 'react-icons/bi'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'

const _DripButton = ({ children, ref, ...superProps }: ButtonCoreProps) => {
  return (
    <STyledButton {...superProps} ref={ref}>
      <BiPlus aria-hidden='true' />
      <VisuallyHidden>Add</VisuallyHidden>
    </STyledButton>
  )
}

export const DripClick = {
  Button: forwardRef<HTMLElement, ButtonCoreProps>(_DripButton),
}
