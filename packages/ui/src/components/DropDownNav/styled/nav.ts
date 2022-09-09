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

  /*2階層目以降は横並びにしない*/
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

  & ul ul li {
    margin-top: var(--nav-paddingY);
  }

  /* navBarの真下に来るliはbarと隙間を開ける */
  & > ul > li > ul > li:first-child {
    margin-top: var(--nav-paddingY);
  }
`

export const Horizontal = styled.div`
  position: relative;

  & ul {
    white-space: nowrap;
    overflow: visible;
    position: absolute;
    left: 100%;
    top: 0;
  }

  & > button {
    position: relative;
  }

  & > button *:last-child {
    position: absolute;
    left: 100%;
  }

  & ul li:first-child {
    margin-top: 0;
  }
`

export const TopUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: var(--nav-paddingX);
  padding-right: var(--nav-paddingX);
`
