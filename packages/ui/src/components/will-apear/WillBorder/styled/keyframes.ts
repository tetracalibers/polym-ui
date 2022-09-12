import { keyframes } from 'styled-components'

export const horizontalLineKeyframes = keyframes`
  0% {
    width: 0%;
  }
  99.9%, to {
    width: 100%;
  }
`

export const verticalLineKeyframes = keyframes`
  0% {
    height: 0%;
  }
  99.9%, to {
    height: 100%;
  }
`

export const childrenDelayKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  99.9%, to {
    opacity: 1;
  }
`
