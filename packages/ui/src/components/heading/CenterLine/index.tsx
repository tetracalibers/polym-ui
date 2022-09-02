import { forwardRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { HeadingCoreProps } from '../../core/Heading'
import { Inner, STyledHeading } from './styled'

const CenterLineHeadingInner = ({
  children,
  ref,
  ...props
}: HeadingCoreProps) => {
  return (
    <ThemeProvider theme={{}}>
      <STyledHeading ref={ref} {...props}>
        <Inner>{children}</Inner>
      </STyledHeading>
    </ThemeProvider>
  )
}

export const CenterLineHeading = forwardRef(CenterLineHeadingInner)
