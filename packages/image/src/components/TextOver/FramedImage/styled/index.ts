import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const insertTxtEffect = css`
  opacity: 1;
`

export const Root = styled.span<Pick<CharacterProps, 'width' | 'height'>>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};

  display: block;
  position: relative; /*テキストの基点となる位置を定義*/
  width: var(--width);
  height: var(--height);
`

// prettier-ignore
export const Mask = styled.span<Pick<CharacterProps, 'imgPadding'>>`
  --img-padding: ${({ imgPadding }) => imgPadding};
  --border-duration: 0.3s;
  --border-color: ${$.grayScale.light};
  --border-style: solid;
  --thickness: 1px;

  position: relative; /*背景色の基点となる位置を定義*/
  display: block;
  line-height: 0;

  &::before,
  &::after {
    position: absolute;
    top: var(--img-padding);
    right: var(--img-padding);
    bottom: var(--img-padding);
    left: var(--img-padding);
    z-index: 3;
    content: '';
    opacity: 0;
    transition: var(--border-duration) ease-in-out;
  }

  &::before {
    border-top: var(--thickness) var(--border-style) var(--border-color);
    border-bottom: var(--thickness) var(--border-style) var(--border-color);
    transform: scale(0, 1);
  }

  &::after {
    border-right: var(--thickness) var(--border-style) var(--border-color);
    border-left: var(--thickness) var(--border-style) var(--border-color);
    transform: scale(1, 0);
  }

  ${Root}:hover &::before,
  ${Root}:hover &::after {
    opacity: 1;
    transform: scale(1);
  }
`

// prettier-ignore
export const TextWrap = styled.span<Pick<CharacterProps, 'txtDuration' | 'trigger'>>`
  --txt-duration: ${({ txtDuration }) => txtDuration}s;

  && {
    position: absolute;
    opacity: 0; /*透過0*/
    transition: var(--txt-duration) ease-in-out;
    z-index: 3; /*テキストを前面に出す*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /*テキストの位置中央指定*/
    width: 100%;
    text-align: center;
    ${({ trigger }) => trigger === 'none' && insertTxtEffect}
  }

  ${Root}:hover && {
    ${({ trigger }) => trigger !== 'none' && insertTxtEffect}
  }
`
