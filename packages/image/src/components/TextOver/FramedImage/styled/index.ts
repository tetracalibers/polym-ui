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

export const Mask = styled.span`
  position: relative; /*背景色の基点となる位置を定義*/
  display: block;
  line-height: 0;

  &::before,
  &::after {
    position: absolute;
    top: 4%;
    right: 4%;
    bottom: 4%;
    left: 4%;
    z-index: 3;
    content: '';
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  &::before {
    border-top: 1px solid #fff; /*枠線の色と太さを変更したい場合はこの数値を変更*/
    border-bottom: 1px solid #fff; /*枠線の色と太さを変更したい場合はこの数値を変更*/
    transform: scale(0, 1);
  }

  &::after {
    border-right: 1px solid #fff; /*枠線の色と太さを変更したい場合はこの数値を変更*/
    border-left: 1px solid #fff; /*枠線の色と太さを変更したい場合はこの数値を変更*/
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
