import { keyframes } from 'styled-components'

export const flipDownKeyframes = keyframes`
  0% {
    transform: perspective(2500px) rotateX(100deg);
    opacity: 0;
  }
  99.9%, to {
    transform: perspective(2500px) rotateX(0);
    opacity: 1;
  }
`

export const flipLeftKeyframes = keyframes`
  0% {
    transform: perspective(600px) translate3d(0, 0, 0) rotateY(30deg);
    opacity: 0;
  }
  99.9%, to {
    transform: perspective(600px) translate3d(0, 0, 0) rotateY(0);
    opacity: 1;
  }
`

export const flipLeftTopKeyframes = keyframes`
  0% {
    transform: translate(-20px, 80px) rotate(-15deg);
    opacity: 0;
  }
  99.9%, to {
    transform: translate(0, 0) rotate(0);
    opacity: 1;
  }
`

export const flipRightKeyframes = keyframes`
  0% {
    transform: perspective(600px) translate3d(0, 0, 0) rotateY(-30deg);
    opacity: 0;
  }
  99.9%, to {
    transform: perspective(600px) translate3d(0, 0, 0) rotateY(0);
    opacity: 1;
  }
`

export const flipRightTopKeyframes = keyframes`
  0% {
    transform: translate(-20px, 80px) rotate(25deg);
    opacity: 0;
  }
  99.9%, to {
    transform: translate(0, 1) rotate(0);
    opacity: 1;
  }
`
