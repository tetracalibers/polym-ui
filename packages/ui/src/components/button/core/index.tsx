import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
  Ref,
  Fragment,
  FC,
  ReactNode,
} from 'react'
import { isStyledComponent, StyledComponent } from 'styled-components'
import { CharacterProps, defaultProps } from './model/props'
import { StyledButton } from './styled'
import { SpecificAttr } from './model/attr'

type AllowElement = StyledComponent<'button', any> | ReactElement<any, 'button'>

type Mode = 'a' | 'button'

type CannotHaveChildren<Props> = Omit<Props, 'children'>

type CommonProps = {
  children: ReactNode
} & CharacterProps

type AnchorModeProps = {
  mode: 'a'
  ref: Ref<HTMLAnchorElement>
} & CommonProps &
  ComponentPropsWithoutRef<'a'>

type ButtonModeProps = {
  mode: 'button'
  ref: Ref<HTMLButtonElement>
} & CommonProps &
  ComponentPropsWithoutRef<'button'>

const ButtonInner: FC<ButtonModeProps | AnchorModeProps> = _props => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  const { mode, children, ...attr } = props

  if (mode === 'button') {
    return <button {...attr}>{children}</button>
  } else {
    return <a {...attr}>{children}</a>
  }
}

export const Button = forwardRef(ButtonInner)
