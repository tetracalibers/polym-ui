import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'

export const Nav = styled.nav`
  --font-size: 1.2rem;
  --icon-height: 1.5rem;
  --nav-paddingX: 1rem;
  --nav-paddingY: 1rem;

  background-color: #4d608b;
  color: #f5f4f0;
  padding: var(--nav-paddingY) 0;

  /* reset -------------------------------------- */
  & button,
  & a {
    ${ResetCss.button}
    text-decoration: none;
    color: inherit;
    font-size: var(--font-size);
  }

  & a {
    display: inline-flex;
    height: var(--icon-height);
    align-items: center;
  }

  & ul {
    list-style: none;
  }

  & > ul {
    margin: 0;
  }

  /* arrow icon --------------------------------- */

  & [aria-haspopup='menu'] svg {
    width: var(--icon-height);
    height: var(--icon-height);
  }

  & [aria-haspopup='menu'][aria-expanded='true'] svg {
    transform: rotate(180deg);
  }

  /* depth -------------------------------------- */

  & ul ul {
    padding-left: 0;
    background-color: #cddeff;
    color: #676fa3;
  }

  & ul li {
    height: var(--icon-height);
    /* 均等配置 */
    flex: 1;
  }

  & ul > li {
    text-align: center;
  }

  & ul ul li:hover {
    transition: all 0.3s;
    background-color: #ce9ffc;
    color: white;
  }

  /* 縦並びの間の隙間 */
  & ul ul li {
    padding: calc(var(--nav-paddingY) * 0.75) 0;
  }

  /* 縦並びの最後のliの下の隙間 */
  & ul ul li:last-child {
    padding-bottom: calc(var(--nav-paddingY) * 0.75);
  }

  /* 縦並びの最初のliの上の隙間 */
  & ul ul li:first-child {
    padding-top: calc(var(--nav-paddingY) * 0.75);
  }

  /* navBarの真下に来るli */
  & > ul > li > ul > li:first-child {
    /* bar下部のpadding分下にずらす */
    margin-top: var(--nav-paddingY);
  }
`

/* 横ポップアップの中身 */
export const Horizontal = styled.div`
  position: relative;

  & ul {
    /* 改行させない */
    white-space: nowrap;
    overflow: visible;
    position: absolute;
    /* ちょっとだけ隙間を空けて横に並べる */
    left: calc(100% + 2.5px);
    /* padding分引き上げることでテキストの高さを揃える */
    top: calc(-1 * var(--nav-paddingY) * 0.75);
    /* liの幅を継承して統一 */
    width: 100%;
  }

  & ul li:first-child {
    margin-top: 0;
  }

  /* 矢印アイコンの配置 ---------------------------------- */

  /* WithIconのdisplay:inline-flexを打ち消す */
  && > button {
    position: relative;
    display: block;
    width: 100%;
    text-align: center;
  }

  & > button *:last-child {
    position: absolute;
    left: calc(100% - var(--icon-height) - 1em);
  }
`

export const TopUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: var(--nav-paddingX);
  padding-right: var(--nav-paddingX);
`
