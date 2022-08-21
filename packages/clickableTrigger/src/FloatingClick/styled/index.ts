import { ResetCss } from 'styled-utility-first'
import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'

const thisCss = css<CharacterProps>`
  /*ボタンの形状*/
  border: 1px solid #ccc;
  color: #333;
  padding: 10px 20px;
  display: inline-block;
  text-decoration: none;
  outline: none;
  /*アニメーションの指定*/
  transition: all 0.3s;

  /*hoverをしたらボックスに影がつく*/
  &:hover {
    box-shadow: 0 7px 10px rgba(0, 0, 0, 0.3);
    border-color: transparent;
  }
`

export const StyledButton = styled.button<CharacterProps>`
  ${ResetCss.button}
  ${thisCss}
`

export const StyledLink = styled.a<CharacterProps>`
  ${thisCss}
`
