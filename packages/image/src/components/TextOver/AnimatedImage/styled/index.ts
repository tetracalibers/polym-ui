import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const injectStartState = (motionType: CharacterProps['motionType']) => {
  return match(motionType)
    .with('slideUp', () => {
      return css`
        transform: translateY(100%);
      `
    })
    .with('slideDown', () => {
      return css`
        transform: translateY(-100%);
      `
    })
    .otherwise(() => '')
}

const injectEndState = (motionType: CharacterProps['motionType']) => {
  return match(motionType)
    .with('slideUp', 'slideDown', () => {
      return css`
        transform: translateY(0);
      `
    })
    .otherwise(() => '')
}

export const Root = styled.span`
  display: block;
  position: relative; /*テキストの基点となる位置を定義*/
`

export const Mask = styled.span<CharacterProps>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};
  --bg-duration: 0.3s;
  --bg-color: ${$.grayScale.dark};
  --bg-opacity: 0.7;

  position: relative; /*背景色の基点となる位置を定義*/
  display: block;
  line-height: 0;
  /* はみ出す画像を隠す */
  overflow: hidden;
  width: var(--width);
  height: var(--height);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    opacity: 0; /*透過0*/
    transition: var(--bg-duration) ease-in-out;
    background-color: var(--bg-color);
    width: 100%;
    height: 100%;
    ${({ motionType }) => injectStartState(motionType)}
  }

  ${Root}:hover &::before {
    opacity: var(--bg-opacity); /*透過なしに変化*/
    ${({ motionType }) => injectEndState(motionType)}
  }
`

export const TextWrap = styled.span<CharacterProps>`
  --txt-duration: 0.5s;

  && {
    position: absolute;
    opacity: 0; /*透過0*/
    transition: var(--txt-duration) ease-in-out;
    z-index: 3; /*テキストを前面に出す*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /*テキストの位置中央指定*/
  }

  ${Root}:hover && {
    opacity: 1; /*透過なしに変化*/
  }
`
