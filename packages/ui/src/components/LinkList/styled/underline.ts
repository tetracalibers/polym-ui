import { UnderLineLinkListProps } from '../index'
import { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'
import { match } from 'ts-pattern'

const setEffect = (type: UnderLineLinkListProps['hoverEffect']) => {
  return match(type)
    .with('growFromCenter', () => {
      return css`
        & > li a::after {
          transform-origin: center top;
          transform: scale(0, 1); /*X方向0、Y方向1*/
          bottom: 0;
          left: 10%;
          /*線の形状*/
          width: 80%;
          height: 2px;
        }

        & > li[data-active='true'] a::after,
        & > li a:hover::after {
          transform: scale(1, 1); /*X方向にスケール拡大*/
        }
      `
    })
    .with('growFromLeft', () => {
      return css`
        & > li a::after {
          transform-origin: left top;
          transform: scale(0, 1); /*X方向0、Y方向1*/
          bottom: 0;
          left: 10%;
          /*線の形状*/
          width: 80%;
          height: 2px;
        }

        & > li[data-active='true'] a::after,
        & > li a:hover::after {
          transform: scale(1, 1); /*X方向にスケール拡大*/
        }
      `
    })
    .with('growFromCircle', () => {
      return css`
        & > li a::after {
          transform-origin: center bottom; /*中央下部基点*/
          bottom: 0;
          left: 0;
          /*線になる丸の形状*/
          width: 100%;
          height: 5px;
          border-radius: 50%;
          transform: scale(0.04, 1); /*X方向0.04、Y方向1*/
        }

        & > li[data-active='true'] a::after,
        & > li a:hover::after {
          height: 2px; /*縦幅を変化*/
          border-radius: 0; /*丸みをなくす*/
          transform: scale(0.8, 1); /*X方向0.8、Y方向1にスケール拡大*/
        }
      `
    })
    .otherwise(() => '')
}

export const injectUnderlineStyle = css`
  & {
    --color: ${$.pastel.purple};
    --bg-color: ${$.pastel.pink};
    --duration: 0.5s;
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
    transition: all var(--duration);
  }

  & > li[data-active='true'] a,
  & > li a:hover {
    color: var(--color);
  }

  ${({ theme }) => setEffect(theme.hoverEffect)}
`
