import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const insertEffect = css<CharacterProps>`
  filter: sepia(0);
`

export const Mask = styled.span<CharacterProps>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};
  --duration: ${({ duration }) => duration}s;
  --sepia: ${({ sepia }) => sepia}%;

  /* はみ出す画像を隠す */
  && {
    display: block;
    line-height: 0;
    overflow: hidden;
    width: var(--width);
    height: var(--height);
  }

  && img {
    filter: sepia(var(--sepia));
    transition: var(--duration) ease-in-out;
  }

  && img:hover {
    ${({ trigger }) => trigger === 'hover' && insertEffect}
  }
`
