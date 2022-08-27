import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

export const SearchInput = styled.input<CharacterProps>`
  --before-width: 60px;

  appearance: none;
  /* 入力エリアが伸びる前の横幅 */
  width: var(--before-width);
  height: var(--before-height);
  padding: calc(var(--before-width) / 3);
  border: none;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;
`

export const Root = styled.div`
  && {
    /* 最前面に設定 */
    z-index: 2;
  }
`

export const ClickArea = styled.div`
  --before-width: 60px;

  /* 入力エリアが伸びる前の横幅 */
  width: var(--before-width);
  height: var(--before-height);
  padding: calc(var(--before-width) / 3);
  cursor: pointer;
`
