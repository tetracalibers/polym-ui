import { ElementType } from 'react'
import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { computeBlurKeyframes } from './keyframes'

const thisCss = css<CharacterProps>`
  animation-name: ${({ blurRadius }) => computeBlurKeyframes(blurRadius)};
  animation-duration: ${({ animationDuration }) => animationDuration}s;
  animation-fill-mode: forwards;
`

export const getStyledElement = <As extends ElementType>(baseAs: As) => styled(
  baseAs
)`
  ${thisCss}
`
