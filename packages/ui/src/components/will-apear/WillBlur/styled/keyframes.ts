import { keyframes } from 'styled-components'
import { CharacterProps } from '../model/props'

export const computeBlurKeyframes = (
  blurRadius: CharacterProps['blurRadius']
) => keyframes`
  from {
    filter: blur(${blurRadius}px);
    transform: scale(1.02) translateZ(0); /* translateZはfilterのmobile対応 */
  }
  to {
    filter: blur(0);
    transform: scale(1) translateZ(0);
  }
`
