import { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

const variables = css`
  --color: ${$.grayScale.light};
  --bg-color: ${$.pastel.pink};
  --duration: 0.5s;
`

export const injectFillStyle = css`
  & {
    ${variables}
  }

  & > li a {
    /*基点とするためrelativeを指定*/
    position: relative;
  }

  & > li a::after {
    content: '';
    position: absolute;
    background-color: var(--bg-color);
    /*アニメーションの指定*/
    transition: all 0.5s;
    z-index: -1;
    bottom: 0;
    left: 0;
    /*背景の形状*/
    width: 0;
    height: 100%;
    opacity: 0; /*はじめは透過0*/
    border-radius: 3rem;
  }

  &[data-active='true'] a,
  & a:hover {
    color: var(--color);
  }

  &[data-active='true'] a::after,
  & a:hover::after {
    width: 100%; /*横幅を伸ばす*/
    opacity: 1; /*不透明に*/
  }
`
