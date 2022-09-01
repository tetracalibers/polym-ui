import _ from 'lodash'
import { ComponentPropsWithoutRef, forwardRef, Ref, ReactNode } from 'react'
import { CharacterProps, defaultProps } from './model/props'
import { CheckSemanticButton, StyledButton } from './styled'

type WithoutChildren<Props> = Omit<Props, 'children'>

type Props = {
  ref: Ref<HTMLButtonElement>
  children: ReactNode
} & CharacterProps &
  WithoutChildren<ComponentPropsWithoutRef<'button'>>

const ButtonInner = ({ children, ref, type, ..._props }: Props) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  return (
    <CheckSemanticButton {...props} ref={ref} type={type ?? 'button'}>
      {children}
    </CheckSemanticButton>
  )
}

export const Button = forwardRef(ButtonInner)
