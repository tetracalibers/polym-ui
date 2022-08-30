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
export const Mask = styled.span<Pick<CharacterProps, 'bgDuration' | 'bgColor' | 'bgOpacity' | 'imgPaddingU' | 'imgPaddingV'>>`
  --bg-duration: ${({ bgDuration }) => bgDuration}s;
  --bg-color: ${({ bgColor }) => bgColor};
  --bg-opacity: ${({ bgOpacity }) => bgOpacity};
  --img-padding: ${({ imgPaddingV, imgPaddingU }) => imgPaddingV! + imgPaddingU!};

  & img {
    transition: all var(--bg-duration) ease;
    backface-visibility: hidden;/*三次元になった際に裏面を可視化させない*/
  }
  
  ${Root}:hover & img {
    transform: rotateX(-180deg);/*縦軸に回転*/
    opacity: 0;
  }
`

// prettier-ignore
export const TextWrap = styled.span`
  && {
    /*ここからエリアの絶対配置の指定*/
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*ここまでエリアの絶対配置の指定*/
    transition: all 0.35s ease;/*移り変わる速さを変更したい場合はこの数値を変更*/
    transform: rotateX(90deg);/*縦軸に回転*/
    transform-origin: 0% 50%;/*回転する基点*/
    opacity: 0;
    background:#333;/*背景色*/
    color: #fff;/*テキストの色を変えたい場合はここを修正*/
    /*ここからテキスト中央寄せの指定*/
    display: flex;
    justify-content: center;
    align-items: center;
    /*ここまでテキスト中央寄せの指定*/
  }

  ${Root}:hover && {
    transform: rotateX(0);
    opacity: 1;
    transition-delay: calc(var(--bg-duration) / 2);
  }
`
