import { keyframes } from 'styled-components'

export const fadeInKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  99.9%, to {
    opacity: 1;
  }
`

export const fadeUpKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  99.9%, to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeDownKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  99.9%, to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeLeftKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  99.9%, to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const fadeRightKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  99.9%, to {
    opacity: 1;
    transform: translateX(0);
  }
`
