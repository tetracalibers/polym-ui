import styled, { css, keyframes } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const caretColorKeyframes = keyframes`
  0% {
    caret-color: transparent;
  }
  100% {
    caret-color: ${$.grayScale.dark};
  }
`

export const Root = styled.div`
  && {
    /* 最前面に設定 */
    z-index: 2;
    position: relative;
  }
`

export const ClickArea = styled.label`
  --before-width: 60px;

  /* 入力エリアが伸びる前の横幅 */
  width: var(--before-width);
  height: var(--before-height);
  padding: calc(var(--before-width) / 3);
  cursor: pointer;
  display: inline-block;
`

export const SearchInput = styled.input<CharacterProps>`
  --before-width: 60px;
  --after-width: 250px;

  appearance: none;
  /* 入力エリアが伸びる前の横幅 */
  width: var(--before-width);
  height: var(--before-height);
  padding: calc(var(--before-width) / 3);
  border: none;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;
  border-radius: 1em;

  &:focus {
    width: var(--after-width);
    padding-right: 0;
    padding-left: var(--before-width);
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    animation: ${caretColorKeyframes} 0.5s;
  }
`
