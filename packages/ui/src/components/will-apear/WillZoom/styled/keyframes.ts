import { keyframes } from 'styled-components'
import { CharacterProps } from '../model/props'

export const getZoomInKeyframes = (
  scaleF: CharacterProps['scaleFactor']
) => keyframes`
  0% {
    transform: scale(${scaleF});
  }
  99.9%, to {
    transform: scale(1);
  }
`

export const getZoomOutKeyframes = (
  scaleF: CharacterProps['scaleFactor']
) => keyframes`
  0% {
    transform: scale(${1 + scaleF});
  }
  99.9%, to {
    transform: scale(1);
  }
`
