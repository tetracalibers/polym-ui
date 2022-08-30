import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

export const Mask = styled.span<CharacterProps>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};

  /* はみ出す画像を隠す */
  && {
    display: block;
    line-height: 0;
    overflow: hidden;
    width: var(--width);
    height: var(--height);
  }

  && img {
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }

  && img:hover {
    transform: scale(1.2);
  }
`
