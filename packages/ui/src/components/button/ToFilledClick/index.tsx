import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  forwardRef,
  Ref,
  ReactNode,
  ReactElement,
} from 'react'
import { Anchor, AnchorCoreProps } from '../../core/Anchor'
import { Button, ButtonCoreProps } from '../../core/Button'
import { CharacterProps, defaultProps } from './model/props'
import { CheckSemanticButton, StyledButton } from './styled'

type WithoutChildren<Props> = Omit<Props, 'children'>

type AllowTag = 'a' | 'button'

const ToFilledClickInner = <As extends AnchorCoreProps | ButtonCoreProps>(
  { ..._props }: CharacterProps,
  as: AllowTag,
  { children, ...superProps }: As
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  const Component = as === 'a' ? Anchor : Button

  type SuperProps = typeof as extends 'a' ? AnchorCoreProps : ButtonCoreProps

  return <Component {...(superProps as SuperProps)}>{children}</Component>
}

export const ToFilledClick = forwardRef(ToFilledClickInner)
