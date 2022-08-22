import styled, { css, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { TagType } from '../../common/props'

const animation = {
  zoom: {
    in: $.zoomInKeyframes,
    out: $.zoomOutKeyframes,
  },
}

const thisCss = css<CharacterProps>`
  animation-name: ${({ zoom }) => animation.zoom[zoom]};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-fill-mode: forwards;
`

export const StyledElement: StyledComponent<TagType, {}> = styled.div`
  ${thisCss}
`
