import styled, { css } from 'styled-components'
import { match } from 'ts-pattern'
import { CharacterProps } from '../model/props'

const spaceBetween = (iconChild: CharacterProps['iconChild']) => {
  return match(iconChild)
    .with('first', () => {
      return css`
        /* icon */
        & :first-child {
          margin-inline-end: var(--space);
        }
      `
    })
    .with('last', () => {
      return css`
        /* icon */
        & :last-child {
          margin-inline-start: var(--space);
        }
      `
    })
    .otherwise(() => '')
}

export const Wrapper = styled.span<CharacterProps>`
  --space: ${({ spaceV, spaceU }) => `${spaceV}${spaceU}`};

  && {
    /* スペース文字を削除 */
    display: inline-flex;
    align-items: baseline;
  }

  ${({ iconChild }) => spaceBetween(iconChild)}
`
