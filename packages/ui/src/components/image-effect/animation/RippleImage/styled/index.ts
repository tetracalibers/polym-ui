import styled, { css, keyframes } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;/*透過なし*/
  }
  30% {
    opacity: 1;
  }
  99.9%, to {
    transform: scale(2);/*アニメーションで大きくなった2倍の円の指定*/
  }
`

export const Mask = styled.span<CharacterProps>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};
  --duration: ${({ duration }) => duration}s;

  /* はみ出す画像を隠す */
  && {
    position: relative; /*基点となる位置を定義*/
    display: block;
    line-height: 0;
    overflow: hidden;
    width: var(--width);
    height: var(--height);
  }

  &&::before {
    position: absolute;
    content: '';
    transform: scale(0); /*円の大きさ初期値は0*/
    opacity: 0; /*透過0*/
    width: var(--width); /*円のサイズ指定*/
    height: var(--width); /*円のサイズ指定*/
    border-radius: 50%; /*円の角丸指定*/
    background: rgba(255, 255, 255, 0.4); /*円の背景色*/
  }

  &&:hover::before {
    /*hoverした時の変化*/
    animation: ${ripple} var(--duration); /*アニメーションの名前と速度を定義*/
  }
`
