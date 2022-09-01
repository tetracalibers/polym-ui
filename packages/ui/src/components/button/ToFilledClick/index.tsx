import _ from 'lodash'
import { forwardRef } from 'react'
import { Anchor, AnchorCoreProps } from '../../core/Anchor'
import { Button, ButtonCoreProps } from '../../core/Button'
import { CharacterProps } from './model/props'

const ToFilledLinkInner = ({
  children,
  ref,
  ...superProps
}: AnchorCoreProps & CharacterProps) => {
  //const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
  //  _.isUndefined(input) ? defaul : input
  //)

  return (
    <Anchor {...superProps} ref={ref}>
      {children}
    </Anchor>
  )
}

const ToFilledButtonInner = ({
  children,
  ref,
  ...superProps
}: ButtonCoreProps & CharacterProps) => {
  //const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
  //  _.isUndefined(input) ? defaul : input
  //)
  //
  return <Button {...superProps}>{children}</Button>
}

export const ToFilledClick = {
  Button: forwardRef<HTMLButtonElement, ButtonCoreProps>(ToFilledButtonInner),
  Link: forwardRef<HTMLAnchorElement, AnchorCoreProps>(ToFilledLinkInner),
}
