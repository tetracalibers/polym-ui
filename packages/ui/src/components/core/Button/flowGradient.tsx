import { ElementType, forwardRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ButtonCoreProps } from '.'
import { AnchorCoreProps } from '../Anchor'
import {
  FlowGradientStyleProps,
  defaultFlowGradientStyleProps,
} from './model/style'
import { injectFlowGradientStyle } from './styled/flowGradient'

type FlowGradientClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> =
  CORE & FlowGradientStyleProps

export const getFlowGradientClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectFlowGradientStyle}
  `
  return forwardRef(
    ({
      children,
      ref,
      bgColor01 = defaultFlowGradientStyleProps.bgColor01,
      bgColor02 = defaultFlowGradientStyleProps.bgColor02,
      bgColor03 = defaultFlowGradientStyleProps.bgColor03,
      bgColor04 = defaultFlowGradientStyleProps.bgColor04,
      slope = defaultFlowGradientStyleProps.slope,
      borderRadiusV = defaultFlowGradientStyleProps.borderRadiusV,
      borderRadiusU = defaultFlowGradientStyleProps.borderRadiusU,
      paddingXU = defaultFlowGradientStyleProps.paddingXU,
      paddingYU = defaultFlowGradientStyleProps.paddingYU,
      paddingXV = defaultFlowGradientStyleProps.paddingXV,
      paddingYV = defaultFlowGradientStyleProps.paddingYV,
      duration = defaultFlowGradientStyleProps.duration,
      ...props
    }: FlowGradientClickProps<CORE>) => {
      return (
        <ThemeProvider
          theme={{
            bgColor01,
            bgColor02,
            bgColor03,
            bgColor04,
            slope,
            borderRadiusV,
            borderRadiusU,
            paddingXU,
            paddingYU,
            paddingXV,
            paddingYV,
            duration,
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
