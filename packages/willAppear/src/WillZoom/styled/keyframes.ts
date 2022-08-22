import { keyframes } from 'styled-components'

export const zoomInKeyframes = keyframes`
  from {
    transform: scale(0.6);
  }
  to {
    transform: scale(1);
  }
`

export const zoomOutKeyframes = keyframes`
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
`
