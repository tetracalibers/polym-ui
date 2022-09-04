import { LinkList, UnderLineLinkListProps } from '../index'
import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { baseStyle, CoreUl } from './core'

const setEffect = (type: UnderLineLinkListProps['hoverEffect']) => {
  return match(type)
    .with('growFromCenter', () => {
      return css`
        transform-origin: center top;
      `
    })
    .with('growFromLeft', () => {
      return css`
        transform-origin: left top;
      `
    })
    .otherwise(() => '')
}

export const injectUnderlineStyle = css`
  &._underline__cdde0ee7 {
    --color: ${$.pastel.purple};
    --bg-color: ${$.pastel.pink};
    --duration: 0.5s;
  }

  &._underline__cdde0ee7 > li a {
    /*基点とするためrelativeを指定*/
    position: relative;
  }

  &._underline__cdde0ee7 > li a::after {
    content: '';
    position: absolute;
    background-color: var(--bg-color);
    /*アニメーションの指定*/
    transition: all var(--duration);
    transform: scale(0, 1); /*X方向0、Y方向1*/
    bottom: 0;
    left: 10%;
    /*線の形状*/
    width: 80%;
    height: 2px;
    ${({ theme }) => setEffect(theme.hoverEffect)}
  }

  &._underline__cdde0ee7 > li[data-active='true'] a,
  &._underline__cdde0ee7 > li a:hover {
    color: var(--color);
  }

  &._underline__cdde0ee7 > li[data-active='true'] a::after,
  &._underline__cdde0ee7 > li a:hover::after {
    transform: scale(1, 1); /*X方向にスケール拡大*/
  }
`
