import { keyframes } from 'styled-components'
import { CharacterProps } from '../model/props'

export const computeBlurKeyframes = (
  blurRadius: CharacterProps['blurRadius']
) => keyframes`
  0% {
    filter: blur(${blurRadius}px);
    transform: scale(1.02) translateZ(0); /* translateZはfilterのmobile対応 */
  }
  99.9%, to {
    filter: blur(0);
    transform: scale(1) translateZ(0);
  }
`
