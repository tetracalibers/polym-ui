import styled, { css, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { TagType } from '../../common/props'

const animation = {
  zoom: {
    in: $.getZoomInKeyframes,
    out: $.getZoomOutKeyframes,
  },
}

const thisCss = css<CharacterProps>`
  animation-name: ${({ zoom, scaleFactor }) =>
    animation.zoom[zoom](scaleFactor)};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-fill-mode: forwards;
`

export const StyledElement: StyledComponent<TagType, {}> = styled.div`
  ${thisCss}
`
