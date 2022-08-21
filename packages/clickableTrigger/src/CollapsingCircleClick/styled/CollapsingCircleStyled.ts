import styled, { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { styleMixin, StyleProps } from '../css-props/props'

const collapsingCircleStyle = css<StyleProps>`
  ${styleMixin}

  /*周囲の線の起点とするためrelativeを指定*/
  position: relative;
  /*円の形状*/
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  box-sizing: border-box;
  text-align: center;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
  color: ${({ color }) => color};
  text-decoration: none;
  outline: none;
  /*天地中央にテキストを配置*/
  display: flex;
  align-items: center;
  justify-content: center;

  /*内側の線*/
  &::after {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    top: 50%;
    left: 50%;
    /*線の形状*/
    width: 85%;
    height: 85%;
    border-width: ${({ borderWidth }) => borderWidth};
    border-style: ${({ borderStyle }) => borderStyle};
    border-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1.1);
    /*アニメーションの指定*/
    transition: 0.3s ease;
  }

  /*hoverをしたら枠線が小さくなる*/
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    border-color: ${({ color }) => color};
  }
`

export const CollapsingCircleButton = styled.button`
  ${ResetCss.button}
  ${collapsingCircleStyle}
`

export const CollapsingCircleLink = styled.a`
  ${collapsingCircleStyle}
`
