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
  99.9%, to {
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
          background-color: var(--bg-color);
          /*背景の形状*/
          width: 0;
          height: 100%;
          border-radius: 3rem;
          /*アニメーションの指定*/
          z-index: -1;
          bottom: 0;
          left: 0;
          opacity: 0; /*はじめは透過0*/
        }

        & > li[data-active='true'] a::after,
        & > li a:hover::after,
        & > li a:focus::after {
          width: 100%; /*横幅を伸ばす*/
          opacity: 1; /*不透明に*/
        }
      `
    })
    .with('fillFromUnderline', () => {
      return css`
        & > li a {
          transition: all var(--duration);
        }

        & > li a::after {
          background-color: var(--bg-color);
          /*背景の形状*/
          width: 0;
          height: 1px;
          border-radius: 1rem 1rem 0 0;
          z-index: -1;
          bottom: 0;
          left: 0;
          opacity: 0; /*はじめは透過0*/
        }

        & > li[data-active='true'] a::after,
        & > li a:hover::after,
        & > li a:focus::after {
          animation: ${fromUnderlineToFill}
            calc(var(--duration) - var(--duration) * 0.28) forwards;
        }

        & > li[data-active='true'] a::after,
        & > li a:hover::after,
        & > li a:focus::after {
          width: 100%; /*横幅を伸ばす*/
          opacity: 1; /*不透明に*/
        }
      `
    })
    .with('fillFromHorizontalLine', () => {
      return css`
        & > li a {
          overflow: hidden;
          transition: all calc(var(--duration) * 0.28);
        }

        & > li[data-active='true'] a,
        & > li a:hover,
        & > li a:focus {
          background-color: var(--bg-color);
        }

        /*背景がつくのアニメーションの開始を遅らせる*/
        & > li a:hover,
        & > li a:focus {
          transition-delay: calc(var(--duration) - var(--duration) * 0.28);
        }

        & > li a::before {
          content: '';
          position: absolute;
          /* 線の位置 */
          top: 0;
          transform: translateX(-100%); /*X方向に-100%移動*/
        }

        & > li a::after {
          /* 線の位置 */
          bottom: 0;
          transform: translateX(100%); /*X方向に100%移動*/
        }

        & > li a::after,
        & > li a::before {
          left: 0;
          /*線の形状*/
          height: 2px;
          width: 100%;
          background-color: var(--bg-color);
          /*アニメーションの指定*/
          transition: all calc(var(--duration) - var(--duration) * 0.28);
        }

        & > li a:hover::before,
        & > li a:hover::after,
        & > li a:focus::before,
        & > li a:focus::after {
          transform: translateX(0); /*X方向に0%移動*/
        }
      `
    })
    .otherwise(() => '')
}

export const injectFillStyle = css`
  & {
    ${variables}
  }

  & > li a:focus {
    outline: none;
  }

  & > li {
    margin-left: 3px;
    margin-right: 3px;
  }

  & > li a {
    /*基点とするためrelativeを指定*/
    position: relative;
  }

  & > li a::after {
    content: '';
    position: absolute;
  }

  & > li[data-active='true'] a,
  & > li a:hover,
  & > li a:focus {
    color: var(--color);
  }

  ${({ theme }) => setEffect(theme.hoverEffect)}
`
