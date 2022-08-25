import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
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

/**
  heightがwidthのx倍 -> margin = width * x / 5 * -1
*/

const formula = (
  width: CharacterProps['width'],
  height: CharacterProps['height']
) => {
  const compare = {
    small: width >= height ? height : width,
    large: width <= height ? height : width,
  }
  const scale = width === height ? 0.66 : compare.small / compare.large
  return `${width} * (${scale} / 5) * 1px`
}

const tailBorder = (
  tailPos: CharacterProps['tailPos'],
  backgroundColor: CharacterProps['backgroundColor'],
  width: CharacterProps['width'],
  height: CharacterProps['height']
) => {
  return match(tailPos)
    .with('bottom', () => {
      return css`
        border: calc(${formula(width, height)}) solid transparent;
        border-top-color: ${backgroundColor};
        border-bottom: 0;
      `
    })
    .with('top', () => {
      return css`
        border: calc(${formula(width, height)}) solid transparent;
        border-bottom-color: ${backgroundColor};
        border-top: 0;
      `
    })
    .with('left', () => {
      return css`
        border: calc(${formula(width, height)}) solid transparent;
        border-right-color: ${backgroundColor};
        border-left: 0;
      `
    })
    .with('right', () => {
      return css`
        border: calc(${formula(width, height)}) solid transparent;
        border-left-color: ${backgroundColor};
        border-right: 0;
      `
    })
    .exhaustive()
}

const tailMargin = (
  tailPos: CharacterProps['tailPos'],
  width: CharacterProps['width'],
  height: CharacterProps['height']
) => {
  return match(tailPos)
    .with('bottom', () => {
      return css`
        margin-left: calc(${formula(width, height)} * -1);
        margin-bottom: calc(${formula(width, height)} * -1);
      `
    })
    .with('top', () => {
      return css`
        margin-left: calc(${formula(width, height)} * -1);
        margin-top: calc(${formula(width, height)} * -1);
      `
    })
    .with('left', () => {
      return css`
        margin-top: calc(${formula(width, height)} * -1);
        margin-left: calc(${formula(width, height)} * -1);
      `
    })
    .with('right', () => {
      return css`
        margin-top: calc(${formula(width, height)} * -1);
        margin-right: calc(${formula(width, height)} * -1);
      `
    })
    .exhaustive()
}

export const StyledElement = styled.div<CharacterProps>`
  && {
    position: relative;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background: ${({ backgroundColor }) => backgroundColor};
    border-radius: ${({ borderRadius }) => borderRadius};
    display: block;

    ${({ tailPos, backgroundColor, width, height }) => {
      return css`
        ${tailSelector(tailPos)} {
          content: '';
          position: absolute;
          ${tailPosition(tailPos)}
          width: 0;
          height: 0;
          ${tailBorder(tailPos, backgroundColor, width, height)}
          ${tailMargin(tailPos, width, height)}
        }
      `
    }}
  }
`
