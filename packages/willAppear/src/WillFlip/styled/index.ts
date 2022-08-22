import styled, { css, Keyframes, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { TagType } from '../../common/props'
import _ from 'lodash'
import { match } from 'ts-pattern'

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
  animation-name: ${({ flipTo }) => animation.flipTo[_.camelCase(flipTo)]};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-fill-mode: forwards;
  ${({ flipTo }) => perspectiveOrigin(flipTo)}
  opacity: 0;
`

export const StyledElement: StyledComponent<TagType, {}> = styled.div`
  ${thisCss}
`
