import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { styleMixin, StyleProps } from '../css-props/props'

export const TriggerClickModeStyled = styled.button<StyleProps>`
  ${ResetCss.button}
  ${styleMixin}

  /*波紋の基点とするためrelativeを指定*/
  position: relative;
  /*はみ出す波紋を隠す*/
  overflow: hidden;
  /*ボタンの形状*/
  text-decoration: none;
  display: inline-block;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  outline: none;

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
`
