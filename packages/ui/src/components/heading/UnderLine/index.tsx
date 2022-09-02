import { forwardRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { HeadingCoreProps } from '../../core/Heading'
import { CharacterProps, defaultProps } from './model/props'
import { STyledHeading } from './styled'

const UnderLineHeadingInner = ({
  children,
  ref,
  paddingYV = defaultProps.paddingYV,
  paddingYU = defaultProps.paddingYU,
  paddingXV = defaultProps.paddingXV,
  paddingXU = defaultProps.paddingXU,
  bgColor = defaultProps.bgColor,
  color = defaultProps.color,
  ...props
}: HeadingCoreProps & CharacterProps) => {
  const themeProps = {
    paddingXU,
    paddingXV,
    paddingYU,
    paddingYV,
    bgColor,
    color,
  }

  return (
    <ThemeProvider theme={themeProps}>
      <STyledHeading ref={ref} {...props}>
        {children}
      </STyledHeading>
    </ThemeProvider>
  )
}

export const UnderLineHeading = forwardRef(UnderLineHeadingInner)
