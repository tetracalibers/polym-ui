import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import * as CSST from 'csstype'
import styled, { css, ThemeProvider } from 'styled-components'
import { ElementType, forwardRef } from 'react'
import _ from 'lodash'

/* -------------------------------------------- */
/* PROPS                                        */
/* -------------------------------------------- */

const gradientConf = {
  g_slope: NotRequired<number>(135), // deg
  g_colors: NotRequired<CSST.Property.BackgroundColor[]>([
    '#abdcff',
    '#0396ff',
  ]),
  g_stops: NotRequired<number[]>([10, 100]), // %
}

// @ts-ignore
export type GradientStyleProps = getPropType<typeof gradientConf>

// @ts-ignore
// prettier-ignore
export const defaultGradientStyleProps = getDefaultProps<GradientStyleProps>(gradientConf)

/* -------------------------------------------- */
/* STYLE                                        */
/* -------------------------------------------- */

const build = (
  colors: GradientStyleProps['g_colors'],
  stops: GradientStyleProps['g_stops']
) => {
  return _.zipWith(_.zip(colors!, stops!), ([color, stop]) => {
    return `${color} ${stop}%`
  })
}

export const gradientStyle = css`
  ${({ theme }) => css`
    && {
      --slope: ${theme.g_slope}deg;
      background-image: linear-gradient(
        var(--slope),
        ${build(theme.g_colors, theme.g_stops).join(', ')}
      );
    }
  `}
`

/* -------------------------------------------- */
/* HOC                                          */
/* -------------------------------------------- */

export const withGradient = (CoreComponent: ElementType) => {
  const Component = styled(CoreComponent)`
    ${gradientStyle}
  `

  return forwardRef(
    <Props extends {} = {}>({
      g_slope = defaultGradientStyleProps.g_slope,
      g_stops = defaultGradientStyleProps.g_stops,
      g_colors = defaultGradientStyleProps.g_colors,
      ...props
    }: GradientStyleProps & Props) => {
      return (
        <ThemeProvider
          theme={{
            g_slope,
            g_stops,
            g_colors,
          }}
        >
          <Component {...props} />
        </ThemeProvider>
      )
    }
  )
}
