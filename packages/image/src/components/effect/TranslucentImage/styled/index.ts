import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const insertEffect = css<CharacterProps>`
  --opacity: ${({ opacity }) => opacity};

  opacity: var(--opacity);
`

export const Mask = styled.span<CharacterProps>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};
  --duration: ${({ duration }) => duration}s;

  /* はみ出す画像を隠す */
  && {
    display: block;
    line-height: 0;
    overflow: hidden;
    width: var(--width);
    height: var(--height);
  }

  && img {
    opacity: 1;
    transition: var(--duration) ease-in-out;
    ${({ trigger }) => trigger === 'none' && insertEffect}
  }

  && img:hover {
    ${({ trigger }) => trigger === 'hover' && insertEffect}
  }
`
