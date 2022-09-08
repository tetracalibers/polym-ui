import { ElementType, forwardRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ButtonCoreProps } from '.'
import { AnchorCoreProps } from '../Anchor'
import {
  ScaleGradientStyleProps,
  defaultScaleGradientStyleProps,
} from './model/style'
import { injectScaleGradientStyle } from './styled/scaleGradient'

type ScaleGradientClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> =
  CORE & ScaleGradientStyleProps

export const getScaleGradientClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectScaleGradientStyle}
  `
  return forwardRef(
    ({
      children,
      ref,
      bgColor01 = defaultScaleGradientStyleProps.bgColor01,
      bgColor02 = defaultScaleGradientStyleProps.bgColor02,
      slope = defaultScaleGradientStyleProps.slope,
      borderRadiusV = defaultScaleGradientStyleProps.borderRadiusV,
      borderRadiusU = defaultScaleGradientStyleProps.borderRadiusU,
      paddingXU = defaultScaleGradientStyleProps.paddingXU,
      paddingYU = defaultScaleGradientStyleProps.paddingYU,
      paddingXV = defaultScaleGradientStyleProps.paddingXV,
      paddingYV = defaultScaleGradientStyleProps.paddingYV,
      duration = defaultScaleGradientStyleProps.duration,
      hoverEffect = defaultScaleGradientStyleProps.hoverEffect,
      scaleFactor = defaultScaleGradientStyleProps.scaleFactor,
      shadowOffsetXV = defaultScaleGradientStyleProps.shadowOffsetXV,
      shadowOffsetYV = defaultScaleGradientStyleProps.shadowOffsetYV,
      shadowBlurV = defaultScaleGradientStyleProps.shadowBlurV,
      shadowOffsetXU = defaultScaleGradientStyleProps.shadowOffsetXU,
      shadowOffsetYU = defaultScaleGradientStyleProps.shadowOffsetYU,
      shadowBlurU = defaultScaleGradientStyleProps.shadowBlurU,
      shadowColor = defaultScaleGradientStyleProps.shadowColor,
      ...props
    }: ScaleGradientClickProps<CORE>) => {
      return (
        <ThemeProvider
          theme={{
            bgColor01,
            bgColor02,
            slope,
            borderRadiusV,
            borderRadiusU,
            paddingXU,
            paddingYU,
            paddingXV,
            paddingYV,
            duration,
            hoverEffect,
            scaleFactor,
            shadowOffsetXV,
            shadowOffsetYV,
            shadowBlurV,
            shadowOffsetXU,
            shadowOffsetYU,
            shadowBlurU,
            shadowColor,
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
