import styled from 'styled-components'
import { CharacterProps } from '../model/props'

export const StyledElement = styled.span<CharacterProps>`
  --size: ${({ sizeV, sizeU }) => `${sizeV}${sizeU}`};
  --color: ${({ color }) => color};

  position: relative;
  width: var(--size);
  height: calc(var(--size) * 0.3);
  /* 擬似要素で描画している分の高さを持たせる */
  padding-top: calc((var(--size) * 0.85 - var(--size) * 0.3) * 0.5);
  padding-bottom: calc((var(--size) * 0.85 - var(--size) * 0.3) * 0.5);
  display: inline-block;

  &::before,
  &::after {
    position: absolute;
    content: '';
    left: calc(var(--size) * 0.55);
    top: 0;
    width: calc(var(--size) * 0.55);
    height: calc(var(--size) * 0.85);
    background: var(--color);
    border-radius: calc(var(--size) * 0.55) calc(var(--size) * 0.55) 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`
