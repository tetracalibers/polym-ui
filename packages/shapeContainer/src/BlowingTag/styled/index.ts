import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'

const tailSelector = (tailPos: CharacterProps['tailPos']) => {
  return match(tailPos)
    .with('bottom', 'top', 'right', () => {
      return '&::after'
    })
    .with('left', () => {
      return '&::before'
    })
    .exhaustive()
}

const tailPosition = (tailPos: CharacterProps['tailPos']) => {
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
    .with('left', () => {
      return css`
        left: 0;
        top: 50%;
      `
    })
    .with('right', () => {
      return css`
        right: 0;
        top: 50%;
      `
    })
    .exhaustive()
}

const tailVisibleBorder = (tailPos: CharacterProps['tailPos']) => {
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
    .with('left', () => {
      return css`
        border-right-color: #333;
        border-left: 0;
      `
    })
    .with('right', () => {
      return css`
        border-left-color: #333;
        border-right: 0;
      `
    })
    .exhaustive()
}

const tailMargin = (tailPos: CharacterProps['tailPos']) => {
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
    .with('left', () => {
      return css`
        margin-top: calc(50px * 0.13 * -1);
        margin-left: calc(50px * 0.13 * -1);
      `
    })
    .with('right', () => {
      return css`
        margin-top: calc(50px * 0.13 * -1);
        margin-right: calc(50px * 0.13 * -1);
      `
    })
    .exhaustive()
}

const thisCss = css<CharacterProps>`
  position: relative;
  width: 50px;
  height: calc(50px * 0.66);
  background: #333;
  border-radius: ${({ borderRadius }) => borderRadius};

  ${({ tailPos }) => {
    return css`
      ${tailSelector(tailPos)} {
        content: '';
        position: absolute;
        ${tailPosition(tailPos)}
        width: 0;
        height: 0;
        border: calc(50px * 0.13) solid transparent;
        ${tailVisibleBorder(tailPos)}
        ${tailMargin(tailPos)}
      }
    `
  }}
`

export const getStyledElement = <As extends ElementType>(baseAs: As) => styled(
  baseAs
)`
  ${thisCss}
`
