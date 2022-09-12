import { keyframes } from 'styled-components'

export const rotateXKeyframes = keyframes`
  0% {
    transform: rotateX(0);
  }
  99.9%, to {
    transform: rotateX(-360deg);
  }
`

export const rotateYKeyframes = keyframes`
  0% {
    transform: rotateY(0);
  }
  99.9%, to {
    transform: rotateY(-360deg);
  }
`

export const rotateZleftKeyframes = keyframes`
  0% {
    transform: rotateZ(0);
  }
  99.9%, to {
    transform: rotateZ(-360deg);
  }
`

export const rotateZrightKeyframes = keyframes`
  0% {
    transform: rotateZ(0);
  }
  99.9%, to {
    transform: rotateZ(360deg);
  }
`
