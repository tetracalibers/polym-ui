import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'

export const Nav = styled.nav`
  /* reset -------------------------------------- */
  & button,
  & a {
    ${ResetCss.button}
    text-decoration: none;
    color: #4d608b;
    font-size: 1.2rem;
  }

  & a {
    display: inline-flex;
    height: 1.5em;
    align-items: center;
  }

  & ul {
    list-style: none;
  }

  /* arrow icon --------------------------------- */

  & [aria-haspopup='menu'] svg {
    width: 1.5em;
    height: 1.5em;
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
  }
`

export const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const TopUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
