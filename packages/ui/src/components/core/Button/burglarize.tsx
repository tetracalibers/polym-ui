import { ElementType, forwardRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ButtonCoreProps } from '.'
import { AnchorCoreProps } from '../Anchor'
import {
  BurglarizeStyleProps,
  defaultBurglarizeStyleProps,
} from './model/style'
import { injectBurglarizeStyle } from './styled/burglarize'

type BurglarizeClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> =
  CORE & BurglarizeStyleProps

export const getBurglarizeClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectBurglarizeStyle}
  `

  return forwardRef(
    ({
      children,
      ref,
      pushTo = defaultBurglarizeStyleProps.pushTo,
      color = defaultBurglarizeStyleProps.color,
      bgColor = defaultBurglarizeStyleProps.bgColor,
      borderRadiusU = defaultBurglarizeStyleProps.borderRadiusU,
      borderRadiusV = defaultBurglarizeStyleProps.borderRadiusV,
      offset = defaultBurglarizeStyleProps.offset,
      paddingXU = defaultBurglarizeStyleProps.paddingXU,
      paddingYU = defaultBurglarizeStyleProps.paddingYU,
      paddingXV = defaultBurglarizeStyleProps.paddingXV,
      paddingYV = defaultBurglarizeStyleProps.paddingYV,
      duration = defaultBurglarizeStyleProps.duration,
      ...props
    }: BurglarizeClickProps<CORE>) => {
      return (
        <ThemeProvider
          theme={{
            pushTo,
            color,
            bgColor,
            borderRadiusU,
            borderRadiusV,
            paddingXV,
            paddingXU,
            paddingYV,
            paddingYU,
            duration,
            offset,
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
