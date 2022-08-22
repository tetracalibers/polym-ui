import { keyframes } from 'styled-components'

export const flipDownKeyframes = keyframes`
  from {
    transform: perspective(2500px) rotateX(100deg);
    opacity: 0;
  }
  to {
    transform: perspective(2500px) rotateX(0);
    opacity: 1;
  }
`

export const flipLeftKeyframes = keyframes`
  from {
    transform: perspective(600px) translate3d(0, 0, 0) rotateY(30deg);
    opacity: 0;
  }
  to {
    transform: perspective(600px) translate3d(0, 0, 0) rotateY(0);
    opacity: 1;
  }
`

export const flipLeftTopKeyframes = keyframes`
  from {
    transform: translate(-20px, 80px) rotate(-15deg);
    opacity: 0;
  }
  to {
    transform: translate(0, 0) rotate(0);
    opacity: 1;
  }
`

export const flipRightKeyframes = keyframes`
  from {
    transform: perspective(600px) translate3d(0, 0, 0) rotateY(-30deg);
    opacity: 0;
  }
  to {
    transform: perspective(600px) translate3d(0, 0, 0) rotateY(0);
    opacity: 1;
  }
`

export const flipRightTopKeyframes = keyframes`
  from {
    transform: translate(-20px, 80px) rotate(25deg);
    opacity: 0;
  }
  to {
    transform: translate(0, 1) rotate(0);
    opacity: 1;
  }
`
