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

const tailVisibleBorder = (
  tailPos: CharacterProps['tailPos'],
  backgroundColor: CharacterProps['backgroundColor']
) => {
  return match(tailPos)
    .with('bottom', () => {
      return css`
        border-top-color: ${backgroundColor};
        border-bottom: 0;
      `
    })
    .with('top', () => {
      return css`
        border-bottom-color: ${backgroundColor};
        border-top: 0;
      `
    })
    .with('left', () => {
      return css`
        border-right-color: ${backgroundColor};
        border-left: 0;
      `
    })
    .with('right', () => {
      return css`
        border-left-color: ${backgroundColor};
        border-right: 0;
      `
    })
    .exhaustive()
}

const tailMargin = (
  tailPos: CharacterProps['tailPos'],
  width: CharacterProps['width']
) => {
  return match(tailPos)
    .with('bottom', () => {
      return css`
        margin-left: calc(${width} * 0.13 * -1);
        margin-bottom: calc(${width} * 0.13 * -1);
      `
    })
    .with('top', () => {
      return css`
        margin-left: calc(${width} * 0.13 * -1);
        margin-top: calc(${width} * 0.13 * -1);
      `
    })
    .with('left', () => {
      return css`
        margin-top: calc(${width} * 0.13 * -1);
        margin-left: calc(${width} * 0.13 * -1);
      `
    })
    .with('right', () => {
      return css`
        margin-top: calc(${width} * 0.13 * -1);
        margin-right: calc(${width} * 0.13 * -1);
      `
    })
    .exhaustive()
}

const thisCss = css<CharacterProps>`
  position: relative;
  width: ${({ width }) => width};
  height: calc(${({ width }) => width} * 0.66);
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};

  ${({ tailPos, backgroundColor, width }) => {
    return css`
      ${tailSelector(tailPos)} {
        content: '';
        position: absolute;
        ${tailPosition(tailPos)}
        width: 0;
        height: 0;
        border: calc(${width} * 0.13) solid transparent;
        ${tailVisibleBorder(tailPos, backgroundColor)}
        ${tailMargin(tailPos, width)}
      }
    `
  }}
`

export const getStyledElement = <As extends ElementType>(baseAs: As) => styled(
  baseAs
)`
  ${thisCss}
`
