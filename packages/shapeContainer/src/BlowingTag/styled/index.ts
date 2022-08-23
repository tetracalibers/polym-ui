import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'

const afterPosition = (tailPos: CharacterProps['tailPos']) => {
  return match(tailPos)
    .with('bottom', () => {
      return css`
        bottom: 0;
        left: 50%;
      `
    })
    .with('top', () => {
      return css`
        top: 0;
        left: 50%;
      `
    })
    .otherwise(() => '')
}

const afterVisibleBorder = (tailPos: CharacterProps['tailPos']) => {
  return match(tailPos)
    .with('bottom', () => {
      return css`
        border-top-color: #333;
        border-bottom: 0;
      `
    })
    .with('top', () => {
      return css`
        border-bottom-color: #333;
        border-top: 0;
      `
    })
    .otherwise(() => '')
}

const afterMargin = (tailPos: CharacterProps['tailPos']) => {
  return match(tailPos)
    .with('bottom', () => {
      return css`
        margin-left: calc(50px * 0.13 * -1);
        margin-bottom: calc(50px * 0.13 * -1);
      `
    })
    .with('top', () => {
      return css`
        margin-left: calc(50px * 0.13 * -1);
        margin-top: calc(50px * 0.13 * -1);
      `
    })
    .otherwise(() => '')
}

const thisCss = css<CharacterProps>`
  position: relative;
  width: 50px;
  height: calc(50px * 0.66);
  background: #333;
  border-radius: 10px;

  &::after {
    content: '';
    position: absolute;
    ${({ tailPos }) => afterPosition(tailPos)}
    width: 0;
    height: 0;
    border: calc(50px * 0.13) solid transparent;
    ${({ tailPos }) => afterVisibleBorder(tailPos)}
    ${({ tailPos }) => afterMargin(tailPos)}
  }
`

export const getStyledElement = <As extends ElementType>(baseAs: As) => styled(
  baseAs
)`
  ${thisCss}
`
