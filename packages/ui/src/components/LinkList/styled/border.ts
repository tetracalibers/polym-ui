import { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

const variables = css`
  /* propsから注入 */
  --color: ${$.grayScale.light};
  --bg-color: ${$.pastel.pink};
  --duration: 0.7s;

  /* 開発者用のメモ */
  --duration-Y: calc(var(--duration) * 0.142);
  --duration-X: calc(var(--duration-Y) * 2);
  --delay-right: calc(var(--duration-X));
  --delay-under: calc(var(--delay-right) + var(--duration-Y));
  --delay-left: calc(var(--delay-under) + var(--duration-X));
`

export const injectBorderStyle = css`
  & {
    ${variables}
  }

  & > li {
    /*基点とするためrelativeを指定*/
    position: relative;
    margin: 0.5rem;
  }

  /* 横線 ----------------------------------------- */

  & > li::before,
  & > li::after {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    background-color: var(--bg-color);
    /*線の形状*/
    width: 0;
    height: 2px;
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
