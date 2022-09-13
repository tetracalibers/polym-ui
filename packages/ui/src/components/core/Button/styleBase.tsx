import { ElementType, forwardRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ButtonCoreProps } from '.'
import { AnchorCoreProps } from '../Anchor'
import { BaseStyleProps, defaultBaseStyleProps } from './model/style'
import { injectBaseStyle } from './styled/styleBase'

export type StyleBaseClickProps<
  CORE extends ButtonCoreProps | AnchorCoreProps
> = CORE & BaseStyleProps

export const getStyleBaseClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectBaseStyle}
  `

  return forwardRef(
    ({
      children,
      ref,
      borderRadiusU = defaultBaseStyleProps.borderRadiusU,
      borderRadiusV = defaultBaseStyleProps.borderRadiusV,
      paddingXU = defaultBaseStyleProps.paddingXU,
      paddingYU = defaultBaseStyleProps.paddingYU,
      paddingXV = defaultBaseStyleProps.paddingXV,
      paddingYV = defaultBaseStyleProps.paddingYV,
      ...props
    }: StyleBaseClickProps<CORE>) => {
      return (
        <ThemeProvider
          theme={{
            borderRadiusU,
            borderRadiusV,
            paddingXU,
            paddingYU,
            paddingXV,
            paddingYV,
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
