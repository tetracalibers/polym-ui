import styled, { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'

const shadowPosition = (pushTo: CharacterProps['pushTo']) => {
  return match(pushTo)
    .with('bottom', () => {
      return css`
        top: 4px;
        left: 0;
      `
    })
    .with('right', () => {
      return css`
        top: 4px;
        left: 4px;
      `
    })
    .otherwise(() => {
      return ''
    })
}

const hoverTransform = (pushTo: CharacterProps['pushTo']) => {
  return match(pushTo)
    .with('bottom', () => {
      return css`
        transform: translateY(4px);
      `
    })
    .with('right', () => {
      return css`
        transform: translate(4px, 4px);
      `
    })
    .otherwise(() => '')
}

const thisCss = css<CharacterProps>`
  /*影の基点とするためrelativeを指定*/
  position: relative;
  /*ボタンの形状*/
  text-decoration: none;
  display: inline-block;
  text-align: center;
  background: transparent;
  border-radius: 25px;
  border: solid 1px #333;
  outline: none;
  /*アニメーションの指定*/
  transition: all 0.2s ease;

  /*hoverをした後のボタンの形状*/
  &:hover {
    border-color: transparent;
  }

  /*ボタンの中のテキスト*/
  & span {
    position: relative;
    z-index: 2; /*z-indexの数値をあげて文字を背景よりも手前に表示*/
    /*テキストの形状*/
    display: block;
    padding: 10px 30px;
    background: #fff;
    border-radius: 25px;
    color: #333;
    /*アニメーションの指定*/
    transition: all 0.3s ease;
  }

  /*影の設定*/
  &:before {
    content: '';
    /*絶対配置で影の位置を決める*/
    position: absolute;
    z-index: -1;
    ${({ pushTo }) => shadowPosition(pushTo)}
    /*影の形状*/
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: #333;
  }

  &:hover span {
    background-color: #333;
    color: #fff;
    ${({ pushTo }) => hoverTransform(pushTo)}
  }
`

export const StyledButton = styled.button<CharacterProps>`
  ${ResetCss.button}
  ${thisCss}
`

export const StyledLink = styled.a<CharacterProps>`
  ${thisCss}
`
