import _ from 'lodash'
import { forwardRef, ReactNode } from 'react'
import { Anchor, AnchorCoreProps } from '../../core/Anchor'
import { Button, ButtonCoreProps } from '../../core/Button'
import { defaultButtonCoreProps } from '../../core/Button/model/props'
import { CharacterProps, defaultProps } from './model/props'
import { ChildrenWrapper, STyledAnchor, STyledButton } from './styled'

const getChildrenDecorator =
  (props: CharacterProps) => (children: ReactNode) => {
    return <ChildrenWrapper {...props}>{children}</ChildrenWrapper>
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
    <STyledAnchor {...superProps} ref={ref}>
      {decorate(children)}
    </STyledAnchor>
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

  return <STyledButton {...superProps}>{decorate(children)}</STyledButton>
}

export const SlideFillClick = {
  Button: forwardRef<HTMLButtonElement, ButtonCoreProps>(SlideFillButtonInner),
  Anchor: forwardRef<HTMLAnchorElement, AnchorCoreProps>(SlideFillAnchorInner),
}
