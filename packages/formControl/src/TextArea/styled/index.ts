import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ColorPalette } from 'styled-utility-first'

const border = (dangerOn: CharacterProps['hasError']) => {
  return dangerOn
    ? css`
        border: 2px solid ${ColorPalette.vivid.red};
      `
    : css`
        border: 1px solid ${ColorPalette.pastel.purple};
      `
}

export const StyledTextarea = styled.textarea<CharacterProps>`
  && {
    color: ${ColorPalette.grayScale.dark};
    ${({ hasError }) => border(hasError)}
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    width: 100%;
    max-width: 300px;
    font-size: 16px;
    line-height: ${({ lineHeight }) => lineHeight}px;
    padding: 9px 12px 10px 12px;
    resize: none;
    overflow: auto;
    height: auto;
    background-color: white;
  }
`
