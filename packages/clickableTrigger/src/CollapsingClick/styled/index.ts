import styled, { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { CharacterProps } from '../model/props'

const thisCss = css`
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
`

export const StyledButton = styled.button`
  ${ResetCss.button}
  ${thisCss}
`

export const StyledLink = styled.a`
  ${thisCss}
`
