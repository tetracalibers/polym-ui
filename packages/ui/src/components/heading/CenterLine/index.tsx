import { forwardRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { HeadingCoreProps } from '../../core/Heading'
import { CharacterProps, defaultProps } from './model/props'
import { Inner, STyledHeading } from './styled'

const CenterLineHeadingInner = ({
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
        <Inner>{children}</Inner>
      </STyledHeading>
    </ThemeProvider>
  )
}

export const CenterLineHeading = forwardRef(CenterLineHeadingInner)
