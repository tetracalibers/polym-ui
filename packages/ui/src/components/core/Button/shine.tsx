import { ElementType, forwardRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ButtonCoreProps } from '.'
import { AnchorCoreProps } from '../Anchor'
import { ShineStyleProps, defaultShineStyleProps } from './model/style'
import { injectShineStyle } from './styled/shine'

type ShineClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> = CORE &
  ShineStyleProps

export const getShineClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectShineStyle}
  `

  return forwardRef(
    ({
      children,
      ref,
      bgColor = defaultShineStyleProps.bgColor,
      borderRadiusU = defaultShineStyleProps.borderRadiusU,
      borderRadiusV = defaultShineStyleProps.borderRadiusV,
      paddingXU = defaultShineStyleProps.paddingXU,
      paddingYU = defaultShineStyleProps.paddingYU,
      paddingXV = defaultShineStyleProps.paddingXV,
      paddingYV = defaultShineStyleProps.paddingYV,
      duration = defaultShineStyleProps.duration,
      ...props
    }: ShineClickProps<CORE>) => {
      return (
        <ThemeProvider
          theme={{
            bgColor,
            borderRadiusU,
            borderRadiusV,
            paddingXU,
            paddingYU,
            paddingXV,
            paddingYV,
            duration,
          }}
        >
          <Component {...props} ref={ref}>
            <span>{children}</span>
          </Component>
        </ThemeProvider>
      )
    }
  )
}
