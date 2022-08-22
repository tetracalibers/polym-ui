import { keyframes } from 'styled-components'
import { CharacterProps } from '../model/props'

export const getZoomInKeyframes = (
  scaleF: CharacterProps['scaleFactor']
) => keyframes`
  from {
    transform: scale(${scaleF});
  }
  to {
    transform: scale(1);
  }
`

export const getZoomOutKeyframes = (
  scaleF: CharacterProps['scaleFactor']
) => keyframes`
  from {
    transform: scale(${1 + scaleF});
  }
  to {
    transform: scale(1);
  }
`
