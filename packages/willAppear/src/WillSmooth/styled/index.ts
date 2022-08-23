import { ElementType } from 'react'
import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'

const thisCss = css<CharacterProps>`
  animation-name: ${$.smoothKeyframes};
  animation-duration: ${({ animationDuration }) => animationDuration}s;
  animation-fill-mode: forwards;
  transform-origin: left;
  opacity: 0;
`

export const getStyledElement = <As extends ElementType>(baseAs: As) => styled(
  baseAs
)`
  ${thisCss}
`
