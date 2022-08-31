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

// prettier-ignore
export const Mask = styled.span<Pick<CharacterProps, 'bgDuration'|'coverOpacity' | 'gradientFrom' | 'gradientTo'>>`
  --bg-duration: ${({ bgDuration }) => bgDuration}s;
  --cover-opacity: ${({ coverOpacity }) => coverOpacity};
  --gd-from: ${({ gradientFrom }) => gradientFrom};
  --gd-to: ${({ gradientTo }) => gradientTo};
  
  position: relative; /*グラデーションの基点となる位置を定義*/
  transition: var(--bg-duration) ease-in-out; /*移り変わる速さを変更したい場合はこの数値を変更*/
  display: block; /*画像をくくるspanタグをブロック要素にする*/
  line-height: 0; /*行の高さを0にする*/

  ${Root}:hover &::before {
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
      var(--gd-from),
      var(--gd-to)
    ); /*背景色（グラデーション）*/
    opacity: var(--cover-opacity);
  }

  & img {
    opacity: 1;
    transition: var(--bg-duration) ease-in-out;
  }

  &:hover img {
    /*hoverした時の変化*/
    opacity: var(--cover-opacity);
  }
`

export const TextWrap = styled.span<Pick<CharacterProps, 'txtDuration'>>`
  --txt-duration: ${({ txtDuration }) => txtDuration}s;

  && {
    opacity: 0;
    transition: var(--txt-duration) ease-in-out;
    position: absolute;
    z-index: 3; /*テキストを前面に出す*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }

  ${Root}:hover && {
    opacity: 1;
  }
`
