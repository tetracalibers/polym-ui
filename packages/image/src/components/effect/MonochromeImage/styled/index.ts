import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const insertEffect = css<CharacterProps>`
  --degree: ${({ withRotate, angle, clockwise }) =>
    withRotate ? (clockwise ? Math.abs(angle!) : -1 * Math.abs(angle!)) : 0}deg;
  --after-scale: ${({ zoom, scaleFactor }) => {
    return match(zoom!)
      .with('in', () => 1)
      .with('out', () => 1 + scaleFactor!)
      .otherwise(() => '')
  }};

  transform: rotate(var(--degree)) scale(var(--after-scale));
`

export const Mask = styled.span<CharacterProps>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};
  --duration: ${({ duration }) => duration}s;
  --before-scale: ${({ zoom, scaleFactor }) => {
    return match(zoom!)
      .with('in', () => 1 + scaleFactor!)
      .with('out', () => 1)
      .otherwise(() => '')
  }};

  /* はみ出す画像を隠す */
  && {
    display: block;
    line-height: 0;
    overflow: hidden;
    width: var(--width);
    height: var(--height);
  }

  && img {
    transform: scale(var(--before-scale));
    transition: var(--duration) ease-in-out;
    ${({ trigger }) => trigger === 'none' && insertEffect}
  }

  && img:hover {
    ${({ trigger }) => trigger === 'hover' && insertEffect}
  }
`
