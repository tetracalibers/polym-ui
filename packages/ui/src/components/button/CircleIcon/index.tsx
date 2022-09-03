import { forwardRef } from 'react'
import { CharacterProps } from './model/props'
import { STyledButton } from './styled'

const _IconButton = ({ ...superProps }: CharacterProps) => {
  return <STyledButton {...superProps} />
}

export const CircleIconClick = {
  Button: forwardRef<HTMLElement, CharacterProps>(_IconButton),
}
