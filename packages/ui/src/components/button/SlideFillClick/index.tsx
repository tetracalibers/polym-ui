import _ from 'lodash'
import { forwardRef, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Anchor, AnchorCoreProps } from '../../core/Anchor'
import { Button, ButtonCoreProps } from '../../core/Button'
import { defaultButtonCoreProps } from '../../core/Button/model/props'
import { CharacterProps, defaultProps } from './model/props'
import { ChildrenWrapper, STyledAnchor, STyledButton } from './styled'

const decorate = (children: ReactNode) => {
  return <ChildrenWrapper>{children}</ChildrenWrapper>
}

const SlideFillAnchorInner = ({
  children,
  ref,
  slide = defaultProps.slide,
  animatedBgColor = defaultProps.animatedBgColor,
  animatedColor = defaultProps.animatedColor,
  animateLineThickness = defaultProps.animateLineThickness,
  duration = defaultProps.duration,
  borderColor = defaultProps.borderColor,
  borderWidth = defaultProps.borderWidth,
  paddingYV = defaultProps.paddingYV,
  paddingYU = defaultProps.paddingYU,
  paddingXV = defaultProps.paddingXV,
  paddingXU = defaultProps.paddingXU,
  ...superProps
}: AnchorCoreProps & CharacterProps) => {
  const thisProps = {
    slide,
    animatedBgColor,
    animatedColor,
    animateLineThickness,
    duration,
    borderColor,
    borderWidth,
    paddingYV,
    paddingYU,
    paddingXV,
    paddingXU,
  }
  return (
    <ThemeProvider theme={thisProps}>
      <STyledAnchor {...superProps} ref={ref}>
        {decorate(children)}
      </STyledAnchor>
    </ThemeProvider>
  )
}

const SlideFillButtonInner = ({
  children,
  ref,
  slide = defaultProps.slide,
  animatedBgColor = defaultProps.animatedBgColor,
  animatedColor = defaultProps.animatedColor,
  animateLineThickness = defaultProps.animateLineThickness,
  duration = defaultProps.duration,
  borderColor = defaultProps.borderColor,
  borderWidth = defaultProps.borderWidth,
  paddingYV = defaultProps.paddingYV,
  paddingYU = defaultProps.paddingYU,
  paddingXV = defaultProps.paddingXV,
  paddingXU = defaultProps.paddingXU,
  ...superProps
}: ButtonCoreProps & CharacterProps) => {
  const thisProps = {
    slide,
    animatedBgColor,
    animatedColor,
    animateLineThickness,
    duration,
    borderColor,
    borderWidth,
    paddingYV,
    paddingYU,
    paddingXV,
    paddingXU,
  }
  return (
    <ThemeProvider theme={thisProps}>
      <STyledButton {...superProps} ref={ref}>
        {decorate(children)}
      </STyledButton>
    </ThemeProvider>
  )
}

export const SlideFillClick = {
  Button: forwardRef<HTMLButtonElement, ButtonCoreProps>(SlideFillButtonInner),
  Anchor: forwardRef<HTMLAnchorElement, AnchorCoreProps>(SlideFillAnchorInner),
}
