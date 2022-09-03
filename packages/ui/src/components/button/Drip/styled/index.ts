import styled from 'styled-components'
import { Button } from '../../../core/Button'
import { ResetCss } from 'styled-utility-first'
import { RippleButton } from '../../RippleClick/styled/RippleClick'
import { ColorPalette as $ } from 'styled-utility-first'

export const STyledButton = styled(Button)`
  ${ResetCss.button}

  /* -------------------------------------------- */
  /* VARIABLES                                    */
  /* -------------------------------------------- */
  
  --size: 4rem;

  /* -------------------------------------------- */
  /* CIRCLE                                       */
  /* -------------------------------------------- */
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: #045de9;

  /* -------------------------------------------- */
  /* DRIP                                         */
  /* -------------------------------------------- */
  background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
  transition: 0.3s ease-out;
  box-shadow: inset 14px 0px 5px -10px rgb(77 96 139/ 20%),
    inset 13px 0px 2px -10px rgb(77 96 139/ 20%),
    inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
    inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
    inset -20px 10px 5px -20px rgb(77 96 139/ 30%),
    inset -20px 15px 10px -20px rgb(77 96 139/ 20%),
    inset 0px 20px 30px -5px rgb(77 96 139/ 30%),
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  &:hover {
    box-shadow: inset 14px 0px 5px -10px rgb(255 255 255 / 20%),
      inset 13px 0px 2px -10px rgb(255 255 255 / 20%),
      inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
      inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
      inset -20px 10px 5px -20px rgb(255 255 255 / 30%),
      inset -20px 15px 10px -20px rgb(255 255 255 / 20%),
      inset 0px 20px 30px -5px rgb(255 255 255 / 30%),
      0px 2px 1px -1px rgb(245 225 183 / 80%);
  }

  /* -------------------------------------------- */
  /* RIPPLE                                       */
  /* -------------------------------------------- */

  /*波紋の基点とするためrelativeを指定*/
  position: relative;
  /*はみ出す波紋を隠す*/
  overflow: hidden;

  &:after {
    content: '';
    /*絶対配置で波紋位置を決める*/
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /*波紋の形状*/
    background: radial-gradient(circle, #fff 10%, transparent 10%) no-repeat 50%;
    transform: scale(10, 10);
    /*はじめは透過0に*/
    opacity: 0;
    /*アニメーションの設定*/
    transition: transform 0.3s, opacity 1s;
  }

  &:active::after {
    transform: scale(0, 0);
    transition: 0s;
    opacity: 0.3;
  }

  /* -------------------------------------------- */
  /* ICON                                         */
  /* -------------------------------------------- */

  && svg {
    font-size: calc(var(--size) * 0.64);
    color: #ffffff80;
    filter: drop-shadow(1px 1px 10px white);
  }
`
