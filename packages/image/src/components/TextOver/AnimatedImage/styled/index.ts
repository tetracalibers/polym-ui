import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const injectStartState = (motionType: CharacterProps['motionType']) => {
  return match(motionType)
    .with('slideUp', () => {
      return css`
        transition: var(--bg-duration) ease-in-out;
        transform: translateY(100%);
      `
    })
    .with('slideDown', () => {
      return css`
        transition: var(--bg-duration) ease-in-out;
        transform: translateY(-100%);
      `
    })
    .with('slideLtoR', () => {
      return css`
        transition: var(--bg-duration) ease-in-out;
        transform: translateX(-100%);
      `
    })
    .with('slideRtoL', () => {
      return css`
        transition: var(--bg-duration) ease-in-out;
        transform: translateX(100%);
      `
    })
    .with('spreadHorizontal', () => {
      return css`
        transition: transform 0.3s cubic-bezier(0.8, 0, 0.2, 1) 0s; /*移り変わる速さを変更したい場合はこの数値を変更*/
        transform: scale(0, 1);
        transform-origin: center;
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
    .with('slideLtoR', 'slideRtoL', () => {
      return css`
        transform: translateX(0);
      `
    })
    .with('spreadHorizontal', () => {
      return css`
        transform: scale(1, 1);
      `
    })
    .otherwise(() => '')
}

export const Root = styled.span<CharacterProps>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};

  display: block;
  position: relative; /*テキストの基点となる位置を定義*/
  width: var(--width);
  height: var(--height);
`

export const Mask = styled.span<CharacterProps>`
  --bg-duration: 0.3s;
  --bg-color: ${$.grayScale.dark};
  --bg-opacity: 0.7;

  position: relative; /*背景色の基点となる位置を定義*/
  display: block;
  line-height: 0;
  /* はみ出す画像を隠す */
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    opacity: 0; /*透過0*/
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
