import { ElementType, forwardRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ButtonCoreProps } from '.'
import { AnchorCoreProps } from '../Anchor'
import { FadeWaveStyleProps, defaultFadeWaveStyleProps } from './model/style'
import { injectFadeWaveStyle } from './styled/fadeWave'

type FadeWaveClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> = CORE &
  FadeWaveStyleProps

export const getFadeWaveClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectFadeWaveStyle}
  `

  return forwardRef(
    ({
      children,
      ref,
      bgColor = defaultFadeWaveStyleProps.bgColor,
      borderRadiusU = defaultFadeWaveStyleProps.borderRadiusU,
      borderRadiusV = defaultFadeWaveStyleProps.borderRadiusV,
      paddingXU = defaultFadeWaveStyleProps.paddingXU,
      paddingYU = defaultFadeWaveStyleProps.paddingYU,
      paddingXV = defaultFadeWaveStyleProps.paddingXV,
      paddingYV = defaultFadeWaveStyleProps.paddingYV,
      duration = defaultFadeWaveStyleProps.duration,
      ...props
    }: FadeWaveClickProps<CORE>) => {
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
