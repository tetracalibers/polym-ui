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

      ...props
    }: ShineClickProps<CORE>) => {
      return (
        <ThemeProvider theme={{}}>
          <Component {...props} ref={ref}>
            <span>{children}</span>
          </Component>
        </ThemeProvider>
      )
    }
  )
}
