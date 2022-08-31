import styled, { css, Keyframes } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import _ from 'lodash'
import { match } from 'ts-pattern'
import { ElementType } from 'react'

const animation = {
  flipTo: {
    bottom: $.flipDownKeyframes,
    left: $.flipLeftKeyframes,
    right: $.flipRightKeyframes,
    leftTop: $.flipLeftTopKeyframes,
    rightTop: $.flipRightTopKeyframes,
  } as Record<string, Keyframes>,
}

const perspectiveOrigin = (flipTo: CharacterProps['flipTo']) => {
  return match(flipTo)
    .with('left', 'right', () => {
      return css`
        perspective-origin: ${flipTo} center;
      `
    })
    .otherwise(() => '')
}

const thisCss = css<CharacterProps>`
  && {
    animation-name: ${({ flipTo }) => animation.flipTo[_.camelCase(flipTo)]};
    animation-duration: ${({ animationDuration }) => animationDuration}s;
    animation-fill-mode: forwards;
    ${({ flipTo }) => perspectiveOrigin(flipTo)}
    opacity: 0;
  }
`

export const StyledElement = styled.div`
  ${thisCss}
`
