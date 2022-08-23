import { ElementType } from 'react'
import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'

const animation = {
  zoom: {
    in: $.getZoomInKeyframes,
    out: $.getZoomOutKeyframes,
  },
}

const thisCss = css<CharacterProps>`
  animation-name: ${({ zoom, scaleFactor }) =>
    animation.zoom[zoom](scaleFactor)};
  animation-duration: ${({ animationDuration }) => animationDuration}s;
  animation-fill-mode: forwards;
`

export const getStyledElement = <As extends ElementType>(baseAs: As) => styled(
  baseAs
)`
  ${thisCss}
`
