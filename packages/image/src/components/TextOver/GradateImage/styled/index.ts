import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

export const Root = styled.span<Pick<CharacterProps, 'width' | 'height'>>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};

  display: block;
  position: relative; /*テキストの基点となる位置を定義*/
  width: var(--width);
  height: var(--height);
`

export const Mask = styled.span<Pick<CharacterProps, 'duration'>>`
  --duration: ${({ duration }) => duration}s;

  position: relative; /*グラデーションの基点となる位置を定義*/
  transition: 0.3s ease-in-out; /*移り変わる速さを変更したい場合はこの数値を変更*/
  display: block; /*画像をくくるspanタグをブロック要素にする*/
  line-height: 0; /*行の高さを0にする*/

  &::before {
    /*hoverした時の変化*/
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(88, 182, 211, 0.6),
      rgba(229, 93, 135, 0.6)
    ); /*背景色（グラデーション）*/
  }

  & img {
    opacity: 1;
    transition: 0.3s ease-in-out;
  }

  &:hover img {
    /*hoverした時の変化*/
    opacity: 0.6;
  }
`

export const TextWrap = styled.span`
  && {
    opacity: 0;
    transition: 0.5s ease-in-out; /*移り変わる速さを変更したい場合はこの数値を変更*/
    position: absolute;
    z-index: 3; /*テキストを前面に出す*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.5; /*行の高さを1.5にする*/
  }

  ${Root}:hover && {
    opacity: 1;
  }
`
