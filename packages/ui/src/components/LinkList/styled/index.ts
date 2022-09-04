import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { CharacterProps } from '../model/props'

const variables = css`
  --color: ${$.pastel.purple};
  --bg-color: ${$.pastel.pink};
`

const injectStyleThemeAs = (styleType: CharacterProps['styleType']) => {
  return match(styleType)
    .with('growUnderFromCenter', () => {
      return css`
        & a::after {
          transform-origin: center top;
          bottom: 0;
          left: 10%;
          /*線の形状*/
          width: 80%;
          height: 2px;
          transform: scale(0, 1); /*X方向0、Y方向1*/
        }

        &[data-active='true'] a,
        & a:hover {
          color: var(--color);
        }

        &[data-active='true'] a::after,
        & a:hover::after {
          transform: scale(1, 1); /*X方向にスケール拡大*/
        }
      `
    })
    .with('growUnderFromLeft', () => {
      return css`
        & a::after {
          transform-origin: left top;
          bottom: 0;
          left: 10%;
          /*線の形状*/
          width: 80%;
          height: 2px;
          transform: scale(0, 1); /*X方向0、Y方向1*/
        }

        &[data-active='true'] a,
        & a:hover {
          color: var(--color);
        }

        &[data-active='true'] a::after,
        & a:hover::after {
          transform: scale(1, 1); /*X方向にスケール拡大*/
        }
      `
    })
    .with('growUpperFromLeft', () => {
      return css`
        & a::after {
          transform-origin: left top;
          top: 0;
          left: 10%;
          /*線の形状*/
          width: 80%;
          height: 2px;
          transform: scale(0, 1); /*X方向0、Y方向1*/
        }

        &[data-active='true'] a,
        & a:hover {
          color: var(--color);
        }

        &[data-active='true'] a::after {
          transform: scale(0.1, 1); /*X方向に0.2スケール拡大*/
        }

        &[data-active='true'] a:hover::after,
        & a:hover::after {
          transform: scale(1, 1); /*X方向にスケール拡大*/
        }
      `
    })
    .with('fillFromLeft', () => {
      return css`
        & a::after {
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
          color: ${$.grayScale.light};
        }

        &[data-active='true'] a::after,
        & a:hover::after {
          width: 100%; /*横幅を伸ばす*/
          opacity: 1; /*不透明に*/
        }
      `
    })
    .otherwise(() => '')
}

export const Ul = styled.ul`
  ${variables}

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

  & a::after {
    content: '';
    position: absolute;
    background-color: var(--bg-color);
    /*アニメーションの指定*/
    transition: all 0.5s;
  }

  ${({ theme }) => injectStyleThemeAs(theme.styleType)}
`
