import styled, { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'

const shadowPosition = (
  pushTo: CharacterProps['pushTo'],
  offset: CharacterProps['offset']
) => {
  return match(pushTo)
    .with('bottom', () => {
      return css`
        top: ${offset}px;
        left: 0;
      `
    })
    .with('right', () => {
      return css`
        top: ${offset}px;
        left: ${offset}px;
      `
    })
    .with('left', () => {
      return css`
        top: ${offset}px;
        right: ${offset}px;
      `
    })
    .exhaustive()
}

const hoverTransform = (
  pushTo: CharacterProps['pushTo'],
  offset: CharacterProps['offset']
) => {
  return match(pushTo)
    .with('bottom', () => {
      return css`
        transform: translateY(${offset}px);
      `
    })
    .with('right', () => {
      return css`
        transform: translate(${offset}px, ${offset}px);
      `
    })
    .with('left', () => {
      return css`
        transform: translate(calc(-1 * ${offset}px), ${offset}px);
      `
    })
    .exhaustive()
}

const thisCss = css<CharacterProps>`
  /*影の基点とするためrelativeを指定*/
  position: relative;
  /*ボタンの形状*/
  text-decoration: none;
  display: inline-block;
  text-align: center;
  background: transparent;
  border-radius: ${({ borderRadius }) => borderRadius};
  border: solid 1px ${({ color }) => color};
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
    padding: ${({ padding }) => padding};
    background: ${({ backgroundColor }) => backgroundColor};
    border-radius: ${({ borderRadius }) => borderRadius};
    color: ${({ color }) => color};
    /*アニメーションの指定*/
    transition: all 0.3s ease;
  }

  /*影の設定*/
  &:before {
    content: '';
    /*絶対配置で影の位置を決める*/
    position: absolute;
    z-index: -1;
    ${({ pushTo, offset }) => shadowPosition(pushTo, offset)}
    /*影の形状*/
    width: 100%;
    height: 100%;
    border-radius: ${({ borderRadius }) => borderRadius};
    background-color: ${({ color }) => color};
  }

  &:hover span {
    background-color: ${({ color }) => color};
    color: ${({ backgroundColor }) => backgroundColor};
    ${({ pushTo, offset }) => hoverTransform(pushTo, offset)}
  }
`

export const StyledButton = styled.button<CharacterProps>`
  ${ResetCss.button}
  ${thisCss}
`

export const StyledLink = styled.a<CharacterProps>`
  ${thisCss}
`
