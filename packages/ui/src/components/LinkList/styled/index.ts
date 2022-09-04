import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { CharacterProps } from '../model/props'

const injectStyleThemeAs = (styleType: CharacterProps['styleType']) => {
  return match(styleType)
    .with('growUnderFromCenter', () => {
      return css`
        transform-origin: center top;
      `
    })
    .with('growUnderFromLeft', () => {
      return css`
        transform-origin: left top;
      `
    })
    .otherwise(() => '')
}

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
`

export const Li = styled.li`
  & a {
    display: block;
    padding: 1rem 2.5rem;
    box-sizing: border-box;
    text-decoration: none;
    color: ${$.grayScale.dark};

    /*基点とするためrelativeを指定*/
    position: relative;
  }

  &[data-active='true'] a,
  & a:hover {
    color: #00b7c3;
  }

  /* styleTypeによって分岐 ---------------------------- */
  & a::after {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    bottom: 0;
    left: 10%;
    /*線の形状*/
    width: 80%;
    height: 2px;
    background: #0099bc;
    /*アニメーションの指定*/
    transition: all 0.3s;
    transform: scale(0, 1); /*X方向0、Y方向1*/
    ${({ theme }) => injectStyleThemeAs(theme.styleType)}
  }

  &[data-active='true'] a::after,
  & a:hover::after {
    transform: scale(1, 1); /*X方向にスケール拡大*/
  }
`
