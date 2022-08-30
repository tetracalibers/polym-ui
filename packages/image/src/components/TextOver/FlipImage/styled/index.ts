import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const injectImgEndState = (flipAxis: CharacterProps['flipAxis']) => {
  return match(flipAxis)
    .with('flipX', () => {
      return css`
        transform: rotateX(-180deg); /*縦軸に回転*/
      `
    })
    .with('flipY', () => {
      return css`
        transform: rotateY(-180deg);
      `
    })
    .with('flipZtoLeftTop', () => {
      return css`
        transform: rotate3d(-1, 1, 0, 100deg); /*奥行きをもたせて回転*/
      `
    })
    .otherwise(() => '')
}

const injectTxtStartState = (flipAxis: CharacterProps['flipAxis']) => {
  return match(flipAxis)
    .with('flipX', () => {
      return css`
        transform: rotateX(90deg); /*縦軸に回転*/
        transform-origin: 0% 50%; /*回転する基点*/
      `
    })
    .with('flipY', () => {
      return css`
        transform: rotateY(90deg); /*横軸に回転*/
        transform-origin: 50% 0%; /*回転する基点*/
      `
    })
    .with('flipZtoLeftTop', () => {
      return css`
        transform: rotate3d(1, -1, 0, 100deg); /*奥行きをもたせて回転*/
      `
    })
    .otherwise(() => '')
}

const injectTxtEndState = (flipAxis: CharacterProps['flipAxis']) => {
  return match(flipAxis)
    .with('flipX', () => {
      return css`
        transform: rotateX(0);
      `
    })
    .with('flipY', () => {
      return css`
        transform: rotateY(0); /*横軸に回転*/
      `
    })
    .with('flipZtoLeftTop', () => {
      return css`
        transform: rotate3d(0, 0, 0, 0deg); /*奥行きをもたせて回転*/
      `
    })
    .otherwise(() => '')
}

export const Root = styled.span<Pick<CharacterProps, 'width' | 'height'>>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};

  display: block;
  position: relative; /*テキストの基点となる位置を定義*/
  width: var(--width);
  height: var(--height);
`

// prettier-ignore
export const Mask = styled.span<Pick<CharacterProps, 'duration' | 'imgPaddingU' | 'imgPaddingV' | 'flipAxis'>>`
  --duration: ${({ duration }) => duration}s;
  --img-padding: ${({ imgPaddingV, imgPaddingU }) => imgPaddingV! + imgPaddingU!};

  & img {
    transition: all var(--duration) ease;
    backface-visibility: hidden;/*三次元になった際に裏面を可視化させない*/
  }
  
  ${Root}:hover & img {
    ${({ flipAxis }) => injectImgEndState(flipAxis)}
    opacity: 0;
  }
`

// prettier-ignore
export const TextWrap = styled.span<Pick<CharacterProps, 'flipAxis' | 'bgOpacity' | 'bgColor'>>`
  --bg-opacity: ${({ bgOpacity }) => bgOpacity};
  --bg-color: ${({ bgColor }) => bgColor};

  && {
    /*ここからエリアの絶対配置の指定*/
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*ここまでエリアの絶対配置の指定*/
    transition: all var(--duration) ease;
    opacity: 0;
    background: var(--bg-color);/*背景色*/
    ${({ flipAxis }) => injectTxtStartState(flipAxis)}
    /*ここからテキスト中央寄せの指定*/
    display: flex;
    justify-content: center;
    align-items: center;
    /*ここまでテキスト中央寄せの指定*/
  }

  ${Root}:hover && {
    opacity: var(--bg-opacity);
    transition-delay: calc(var(--duration) / 2);
    ${({ flipAxis }) => injectTxtEndState(flipAxis)}
  }
`
