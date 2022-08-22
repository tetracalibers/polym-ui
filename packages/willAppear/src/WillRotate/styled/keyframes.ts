import { keyframes } from 'styled-components'

export const rotateXKeyframes = keyframes`
  from {
    transform: rotateX(0);
  }
  to {
    transform: rotateX(-360deg);
  }
`

export const rotateYKeyframes = keyframes`
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(-360deg);
  }
`

export const rotateZleftKeyframes = keyframes`
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(-360deg);
  }
`

export const rotateZrightKeyframes = keyframes`
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
`
