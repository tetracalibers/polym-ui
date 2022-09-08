import { ElementType, forwardRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ButtonCoreProps } from '.'
import { AnchorCoreProps } from '../Anchor'
import {
  ToFillGradientStyleProps,
  defaultToFillGradientStyleProps,
} from './model/style'
import { injectToFillGradientStyle } from './styled/toFillGradient'

type ToFillGradientClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> =
  CORE & ToFillGradientStyleProps

export const getToFillGradientClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectToFillGradientStyle}
  `
  return forwardRef(
    ({
      children,
      ref,
      bgColor01 = defaultToFillGradientStyleProps.bgColor01,
      bgColor02 = defaultToFillGradientStyleProps.bgColor02,
      bgColor03 = defaultToFillGradientStyleProps.bgColor03,
      slope = defaultToFillGradientStyleProps.slope,
      borderRadiusV = defaultToFillGradientStyleProps.borderRadiusV,
      borderRadiusU = defaultToFillGradientStyleProps.borderRadiusU,
      paddingXU = defaultToFillGradientStyleProps.paddingXU,
      paddingYU = defaultToFillGradientStyleProps.paddingYU,
      paddingXV = defaultToFillGradientStyleProps.paddingXV,
      paddingYV = defaultToFillGradientStyleProps.paddingYV,
      duration = defaultToFillGradientStyleProps.duration,
      shadowOffsetXV = defaultToFillGradientStyleProps.shadowOffsetXV,
      shadowOffsetYV = defaultToFillGradientStyleProps.shadowOffsetYV,
      shadowBlurV = defaultToFillGradientStyleProps.shadowBlurV,
      shadowOffsetXU = defaultToFillGradientStyleProps.shadowOffsetXU,
      shadowOffsetYU = defaultToFillGradientStyleProps.shadowOffsetYU,
      shadowBlurU = defaultToFillGradientStyleProps.shadowBlurU,
      shadowColor = defaultToFillGradientStyleProps.shadowColor,
      borderWidthU = defaultToFillGradientStyleProps.borderWidthU,
      borderWidthV = defaultToFillGradientStyleProps.borderWidthV,
      borderColor = defaultToFillGradientStyleProps.borderColor,
      borderStyle = defaultToFillGradientStyleProps.borderStyle,
      afterColor = defaultToFillGradientStyleProps.afterColor,
      ...props
    }: ToFillGradientClickProps<CORE>) => {
      return (
        <ThemeProvider
          theme={{
            bgColor01,
            bgColor02,
            bgColor03,
            slope,
            borderRadiusV,
            borderRadiusU,
            paddingXU,
            paddingYU,
            paddingXV,
            paddingYV,
            duration,
            shadowOffsetXV,
            shadowOffsetYV,
            shadowBlurV,
            shadowOffsetXU,
            shadowOffsetYU,
            shadowBlurU,
            shadowColor,
            borderColor,
            borderStyle,
            borderWidthU,
            borderWidthV,
            afterColor,
          }}
        >
          <Component {...props} ref={ref}>
            {children}
          </Component>
        </ThemeProvider>
      )
    }
  )
}
