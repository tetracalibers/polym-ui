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
    flex: 1;
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

  /*2階層目以降は横並びにしない*/
  & ul ul {
    padding-left: 0;
  }

  /*下の階層のulや矢印の基点にするためliにrelativeを指定*/
  & ul li {
    position: relative;
    height: var(--icon-height);
  }

  & ul ul li {
    margin-top: var(--nav-paddingY);
  }

  /* navBarの真下に来るliはbarと隙間を開ける */
  & > ul > li > ul > li:first-child {
    margin-top: calc(var(--nav-paddingY) * 2);
  }
`

export const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* 別レイヤーにすることで開閉による親要素の伸縮回避 */
  position: absolute;

  & ul {
    white-space: nowrap;
    overflow: visible;
  }

  & ul li:first-child {
    margin-top: 0;
  }
`

export const TopUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: var(--nav-paddingX);
  padding-right: var(--nav-paddingX);
`
