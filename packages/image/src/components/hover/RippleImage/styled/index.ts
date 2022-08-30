import styled, { css, keyframes } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const throughShine = keyframes`
  100% {
    /*画面の見えていない左から右へ移動する終了地点*/
    left: 125%;
  }
`

export const Mask = styled.span<CharacterProps>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};
  --duration: ${({ duration }) => duration}s;

  /* はみ出す画像を隠す */
  && {
    position: relative; /*キラッの基点となる位置を定義*/
    display: block;
    line-height: 0;
    overflow: hidden;
    width: var(--width);
    height: var(--height);
  }

  &&::before {
    position: absolute;
    content: '';
    width: 50%; /*キラッの横幅*/
    height: 110%; /*キラッの縦幅*/
    top: -10%; /*.shine span.maskのトップ0を基点*/
    left: -75%; /*画面の見えていない左から右へ移動するスタート地点*/
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    transform: skewX(-25deg); /*背景白透過を斜めに*/
  }

  &&:hover::before {
    /*hoverした時の変化*/
    animation: ${throughShine} var(--duration); /*アニメーションの名前と速度を定義*/
  }
`
