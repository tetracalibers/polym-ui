import _ from 'lodash'
import { forwardRef, ReactNode } from 'react'
import { Anchor, AnchorCoreProps } from '../../core/Anchor'
import { Button, ButtonCoreProps } from '../../core/Button'
import { defaultButtonCoreProps } from '../../core/Button/model/props'
import { CharacterProps, defaultProps } from './model/props'

const getChildrenDecorator =
  (props: CharacterProps) => (children: ReactNode) => {
    return <span {...props}>{children}</span>
  }

const SlideFillAnchorInner = ({
  children,
  ref,
  slide = defaultProps.slide,
  ...superProps
}: AnchorCoreProps & CharacterProps) => {
  const thisProps = { slide }
  const decorate = getChildrenDecorator(thisProps)
  return (
    <Anchor {...superProps} ref={ref}>
      {decorate(children)}
    </Anchor>
  )
}

const SlideFillButtonInner = ({
  children,
  ref,
  slide = defaultProps.slide,
  ...superProps
}: ButtonCoreProps & CharacterProps) => {
  const thisProps = { slide }
  const decorate = getChildrenDecorator(thisProps)

  return <Button {...superProps}>{decorate(children)}</Button>
}

export const SlideFillClick = {
  Button: forwardRef<HTMLButtonElement, ButtonCoreProps>(SlideFillButtonInner),
  Anchor: forwardRef<HTMLAnchorElement, AnchorCoreProps>(SlideFillAnchorInner),
}
