import styled from 'styled-components'
import { BlockIconButton } from './BlockIconButton'

export const HistoryButtonShadow = styled.div`
  position: relative;
  box-shadow: rgb(255 255 255 / 35%) 0px 2px 20px 0px;
  border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
`

export const HistoryButton = styled(BlockIconButton)`
  & {
    background-image: linear-gradient(120deg, #34e0f0 0%, #b400ff 100%);
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    width: 3rem;
    height: 3rem;
    transform-style: preserve-3d;
    outline: 1px solid transparent;
  }

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    box-shadow: 5px 5px 89px rgba(0, 102, 255, 0.21);
    background-image: linear-gradient(
      120deg,
      rgb(0 67 255 / 44%) 0%,
      rgb(0 103 255 / 64%) 100%
    );
  }

  &:before {
    opacity: 0.21;
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
  }

  &:after {
    opacity: 0.89;
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
  }

  &:disabled {
    border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
    position: relative;
    background: radial-gradient(
      circle at 75% 30%,
      white 5px,
      aqua 8%,
      darkblue 60%,
      aqua 100%
    );
    box-shadow: rgb(255 255 255) 0px 0px 20px inset,
      inset 88px 0px 60px #88b3ff3d, inset 9px 20px 20px 0px #fde9ea,
      rgb(234 245 252) 10px 0px 46px inset,
      rgb(136 179 255 / 0%) 88px 0px 60px inset,
      rgb(96 85 86 / 0%) -16px 20px 100px,
      rgb(253 233 234 / 0%) 9px 20px 20px 0px inset,
      rgb(255 255 255 / 20%) 14px 0px 5px -10px inset,
      rgb(255 255 255 / 20%) 13px 0px 2px -10px inset,
      rgb(250 241 220 / 50%) 0px -3px 5px 0px inset,
      rgb(255 255 255 / 30%) 0px -20px 10px 1px inset,
      rgb(255 255 255 / 30%) -20px 10px 5px -20px inset,
      rgb(255 255 255 / 20%) -20px 15px 10px -20px inset,
      rgb(255 255 255 / 30%) 6px 20px 20px 20px inset;
    opacity: 0.5;
    cursor: default;
  }

  &:disabled::after,
  &:disabled::before {
    opacity: 0;
  }

  && svg {
    color: #fff;
  }
`
