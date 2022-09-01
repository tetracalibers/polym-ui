import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  forwardRef,
  Ref,
  ReactNode,
  ReactElement,
  ForwardedRef,
} from 'react'
import { CoreProps, defaultProps } from './model/props'
import { CheckSemanticButton, StyledButton } from './styled'

export type ButtonCoreProps = {
  ref?: ForwardedRef<HTMLButtonElement>
  children: ReactNode
} & CoreProps &
  Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'type'>

export type ButtonComponent = (props: ButtonCoreProps) => ReactElement | null

const ButtonInner = ({ children, ref, type, ..._props }: ButtonCoreProps) => {
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
