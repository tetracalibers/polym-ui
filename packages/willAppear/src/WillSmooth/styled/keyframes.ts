import { keyframes } from 'styled-components'

export const smoothKeyframes = keyframes`
  from {
    transform: translate3d(0, 100%, 0) skewY(12deg);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0) skewY(0);
    opacity: 1;
  }
`
