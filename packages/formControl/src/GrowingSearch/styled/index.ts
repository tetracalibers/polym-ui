import styled, { css, keyframes } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy, ResetCss } from 'styled-utility-first'

const caretColorKeyframes = keyframes`
  0% {
    caret-color: transparent;
  }
  100% {
    caret-color: ${$.grayScale.dark};
  }
`

const showResetButton = keyframes`
  0% {
    color: transparent;
    left: 0%;
  }
  100% {
    color: #E74856;
    left: 92.5%;
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
  position: relative;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none; /* デフォルトのサーチキャンセルボタンを非表示にする場合 */
  }

  &:focus {
    width: var(--after-width);
    padding-right: 0;
    padding-left: var(--before-width);
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    animation: ${caretColorKeyframes} 0.5s;
    cursor: text;
  }

  &:focus + * {
    cursor: default;
    pointer-events: none;
  }
`

export const ResetButton = styled.button`
  ${ResetCss.button}
  position:absolute;
  top: 50%;
  transform: translate(0, -50%);
  color: transparent;

  ${ClickArea}:focus-within + & {
    animation-name: ${showResetButton};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
`

export const InputWrapper = styled.div`
  --after-width: 250px;
  --before-width: 60px;

  width: var(--after-width);
  height: var(--before-height);
  position: relative;
`
