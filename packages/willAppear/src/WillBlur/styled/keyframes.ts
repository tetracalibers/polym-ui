import { keyframes } from 'styled-components'

export const blurKeyframes = keyframes`
  from {
    filter: blur(10px);
    transform: scale(1.02);
  }
  to {
    filter: blur(0);
    transform: scale(1);
  }
`
