import { forwardRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { HeadingCoreProps } from '../../core/Heading'
import { CharacterProps, defaultProps } from './model/props'
import { STyledHeading } from './styled'

const LeftLineHeadingInner = ({
  children,
  ref,
  paddingBottomV = defaultProps.paddingBottomV,
  paddingBottomU = defaultProps.paddingBottomU,
  lineThicknessV = defaultProps.lineThicknessV,
  lineThicknessU = defaultProps.lineThicknessU,
  lineStyle = defaultProps.lineStyle,
  lineColor = defaultProps.lineColor,
  color = defaultProps.color,
  ...props
}: HeadingCoreProps & CharacterProps) => {
  const themeProps = {
    paddingBottomU,
    paddingBottomV,
    lineThicknessV,
    lineThicknessU,
    lineStyle,
    lineColor,
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

export const LeftLineHeading = forwardRef(LeftLineHeadingInner)
