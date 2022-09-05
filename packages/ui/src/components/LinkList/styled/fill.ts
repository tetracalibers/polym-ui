import { FillLinkListProps } from './../index'
import { css, keyframes } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'
import { match } from 'ts-pattern'

const variables = css`
  --color: ${$.grayScale.light};
  --bg-color: ${$.pastel.pink};
  --duration: 0.7s;
`

const fromUnderlineToFill = keyframes`
  0% {
    width: 0%;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  100% {
    width: 100%;
    height: 100%;
  }
`

const setEffect = (type: FillLinkListProps['hoverEffect']) => {
  return match(type)
    .with('fillFromLeft', () => {
      return css`
        & > li a::after {
          transition: all var(--duration);
          /*背景の形状*/
          width: 0;
          height: 100%;
          border-radius: 3rem;
        }
      `
    })
    .with('fillFromUnderline', () => {
      return css`
        & > li a {
          transition: all var(--duration);
        }

        & > li a:after {
          /*背景の形状*/
          width: 0;
          height: 1px;
          border-radius: 1rem 1rem 0 0;
        }

        &[data-active='true'] a::after,
        & a:hover::after {
          animation: ${fromUnderlineToFill} calc(var(--duration) - 0.2s)
            forwards;
        }
      `
    })
    .otherwise(() => '')
}

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
    z-index: -1;
    bottom: 0;
    left: 0;
    opacity: 0; /*はじめは透過0*/
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

  ${({ theme }) => setEffect(theme.hoverEffect)}
`
