import { keyframes } from 'styled-components'

export const horizontalLineKeyframes = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`

export const verticalLineKeyframes = keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
`

export const childrenDelayKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
