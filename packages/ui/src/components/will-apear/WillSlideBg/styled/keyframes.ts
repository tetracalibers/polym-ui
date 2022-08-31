import { keyframes } from 'styled-components'

export const bgDelayKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

export const bgSlideFromLeft = keyframes`
  0% {
    transform-origin: left;
    transform: scaleX(0);
  }
  50% {
    transform-origin: left;
    transform: scaleX(1);
  }
  50.001% {
    transform-origin: right;
  }
  100% {
    transform-origin: right;
    transform: scaleX(0);
  }
`

export const bgSlideFromRight = keyframes`
  0% {
    transform-origin: right;
    transform: scaleX(0);
  }
  50% {
    transform-origin: right;
    transform: scaleX(1);
  }
  50.001% {
    transform-origin: left;
  }
  100% {
    transform-origin: left;
    transform: scaleX(0);
  }
`

export const bgSlideFromBottom = keyframes`
  0% {
    transform-origin: bottom;
    transform: scaleY(0);
  }
  50% {
    transform-origin: bottom;
    transform: scaleY(1);
  }
  50.001% {
    transform-origin: top;
  }
  100% {
    transform-origin: top;
    transform: scaleY(0);
  }
`

export const bgSlideFromTop = keyframes`
  0% {
    transform-origin: top;
    transform: scaleY(0);
  }
  50% {
    transform-origin: top;
    transform: scaleY(1);
  }
  50.001% {
    transform-origin: bottom;
  }
  100% {
    transform-origin: bottom;
    transform: scaleY(0);
  }
`
