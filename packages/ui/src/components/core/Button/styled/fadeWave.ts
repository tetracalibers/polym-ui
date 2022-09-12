import { css, keyframes } from 'styled-components'
import { ResetCss } from 'styled-utility-first'

const fadeCircle = keyframes`
  0% {
    transform: scale(0);
  }
  99.9%, to {
    transform: scale(2);
    opacity: 0;
  }
`

export const injectFadeWaveStyle = css`
  ${ResetCss.button}

  /*波紋の基点とするためrelativeを指定*/
  position: relative;
  /*リンクの形状*/
  display: inline-block;
  text-decoration: none;
  outline: none;
  background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
  border-radius: 4em;
  padding: 1em 2em;

  &:hover::before {
    content: '';
    /*絶対配置で波形の位置を決める*/
    position: absolute;
    left: 30%;
    top: 0;
    /*波形の形状*/
    border: 1px solid rgb(130, 177, 255);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /*はじめは不透明*/
    opacity: 1;
    /*アニメーションの設定*/
    animation: 1s ${fadeCircle} forwards;
  }
`
