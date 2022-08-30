import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

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
  --after-scale: ${({ zoom, scaleFactor }) => {
    return match(zoom!)
      .with('in', () => 1)
      .with('out', () => 1 + scaleFactor!)
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
  }

  && img:hover {
    transform: scale(var(--after-scale));
  }
`
