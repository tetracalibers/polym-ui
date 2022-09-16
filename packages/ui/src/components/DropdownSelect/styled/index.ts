import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'

export const Root = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
  font-size: 18px;
  color: #60666d;
`

export const AutoComplete = styled.div`
  --icon-size: 2rem;
  --icon-color: #cfd8dc;

  display: flex;

  & input {
    width: 100%;
    margin: 0;
    padding: 1rem;
    background-color: #fff;
    box-sizing: border-box;
    border: none;
    outline: none;
    margin-right: calc(-1 * var(--icon-size) * 1.25);
    font-size: 1rem;
  }

  & button {
    ${ResetCss.button}
  }

  & button svg {
    width: var(--icon-size);
    height: var(--icon-size);
    fill: var(--icon-color);
    stroke: var(--icon-color);
    transform: rotate(0deg);
    transition: transform 0.5s ease;
  }

  & button[data-open='true'] svg {
    transform: rotate(180deg);
  }
`

export const InputControl = styled.div``

export const SelectList = styled.ul`
  /* メニューをスクロール可能にする */
  max-height: 12em;
  overflow-y: scroll;
  /* iOSで慣性スクロールができるようにする */
  -webkit-overflow-scrolling: touch;

  /* scroll hint */
  background: linear-gradient(#ffffff 33%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), #ffffff 66%) 0 100%,
    radial-gradient(farthest-side at 50% 0, #cfd8dc, rgba(255, 255, 255, 0)),
    radial-gradient(farthest-side at 50% 100%, #cfd8dc, rgba(255, 255, 255, 0))
      0 100%;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-attachment: local, local, scroll, scroll;
  background-size: 100% 33px, 100% 33px, 100% 11px, 100% 11px;

  /* design */
  position: absolute;
  width: 100%;
  padding: 0;
  top: 100%;
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  & > li {
    display: block;
    padding: 15px;
  }

  & > li:hover,
  & > li:focus {
    color: #fff;
    background-color: #546c84;
  }
`
