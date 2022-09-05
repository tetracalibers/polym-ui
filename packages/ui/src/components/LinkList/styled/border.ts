import { BorderLinkListProps } from './../index'
import { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'
import { match } from 'ts-pattern'

const baseStyle = css`
  & {
    /* propsから注入 */
    --color: ${$.grayScale.light};
    --bg-color: ${$.pastel.pink};
    --duration: 0.5s;
    --gap: 0.5rem;
  }

  & > li {
    /*基点とするためrelativeを指定*/
    position: relative;
    margin-left: var(--gap);
    margin-right: var(--gap);
  }

  & > li::before,
  & > li::after {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    /*線の形状*/
    width: 0;
    height: 2px;
    background-color: var(--bg-color);
  }
`

const goAroundStyle = css`
  ${baseStyle}

  & {
    /* 開発者用のメモ */
    --duration-Y: calc(var(--duration) * 0.142);
    --duration-X: calc(var(--duration-Y) * 2);
    --delay-right: calc(var(--duration-X));
    --delay-under: calc(var(--delay-right) + var(--duration-Y));
    --delay-left: calc(var(--delay-under) + var(--duration-X));
  }

  /* 横線 ----------------------------------------- */

  & > li::before,
  & > li::after {
    /*アニメーションの指定*/
    transition: all var(--duration-X) linear;
  }

  & > li::before {
    right: 0;
    bottom: 0;
  }

  & > li::after {
    left: 0;
    top: 0;
  }

  /* 縦線 ----------------------------------------- */

  & > li > a > span {
    display: block;
  }

  & > li > a > span::before,
  & > li > a > span::after {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    background: var(--bg-color);
    /*線の形状*/
    width: 2px;
    height: 0;
    /*アニメーションの指定*/
    transition: all var(--duration-Y) linear;
  }

  & > li > a > span::before {
    left: 0;
    bottom: 0;
  }

  & > li > a > span::after {
    right: 0;
    top: 0;
  }

  /* onHover ------------------------------------ */

  & > li[data-active='true']::before,
  & > li[data-active='true']::after,
  & > li:hover::before,
  & > li:hover::after {
    width: 100%;
  }

  /* 上の横線(0.2sかかる) */
  & > li:hover::after {
    transition-delay: 0s; /*すぐ線を出現させる*/
  }

  /* 下の横線(0.2sかかる) */
  & > li:hover::before {
    transition-delay: var(--delay-under); /*線の出現を0.3秒遅らせる*/
  }

  & > li[data-active='true'] a > span::before,
  & > li[data-active='true'] a > span::after,
  & > li:hover a > span::before,
  & > li:hover a > span::after {
    height: 100%;
  }

  /* 左の縦線(0.1sかかる) */
  & > li:hover a > span::before {
    transition-delay: var(--delay-left); /*線の出現を0.5秒遅らせる*/
  }

  /* 右の縦線(0.1sかかる) */
  & > li:hover a > span::after {
    transition-delay: var(--delay-right); /*線の出現を0.2秒遅らせる*/
  }
`

const twoLinesMergeStyle = css`
  ${baseStyle}

  & {
    /* 開発者用のメモ */
    --draw-oneline: calc(var(--duration) * 0.5);
  }

  /*線の基点位置*/
  & > li::before,
  & > li::after {
    /*アニメーションの指定*/
    transition: all var(--draw-oneline) linear;
    transition-delay: var(--draw-oneline);
  }

  & > li::before {
    right: 0;
    top: 0;
  }
  & > li::after {
    left: 0;
    bottom: 0;
  }

  /*線の基点位置2 spanタグ*/

  & > li > a > span {
    display: block;
  }

  & > li > a > span::before,
  & > li > a > span::after {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    /*線の形状*/
    width: 2px;
    height: 0;
    background-color: var(--bg-color);
    /*アニメーションの指定*/
    transition: all var(--draw-oneline) linear;
  }

  & > li > a > span::before {
    left: 0;
    top: 0;
  }
  & > li > a > span::after {
    right: 0;
    bottom: 0;
  }

  /*現在地とhoverした際の線の変化*/

  & > li.current::before,
  & > li.current::after,
  & > li:hover::before,
  & > li:hover::after {
    width: 100%; /*横幅を100%に*/
  }

  & > li.current span::before,
  & > li.current span::after,
  & > li:hover span::before,
  & > li:hover span::after {
    height: 100%; /*縦幅を100%に*/
  }
`

const setEffect = (type: BorderLinkListProps['hoverEffect']) => {
  return match(type)
    .with('goAround', () => goAroundStyle)
    .with('twoLinesMerge', () => twoLinesMergeStyle)
    .otherwise(() => '')
}

export const injectBorderStyle = css`
  ${({ theme }) => setEffect(theme.hoverEffect)}
`
