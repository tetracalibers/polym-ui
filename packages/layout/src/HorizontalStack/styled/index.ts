import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'

export const StyledElement = styled.div<CharacterProps>`
  --space: ${({ spaceV, spaceU }) => `${spaceV}${spaceU}`};
  --breakpoint: ${({ breakpointV, breakpointU }) =>
    `${breakpointV}${breakpointU}`};

  && {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space);
  }

  && > * > * {
    /* 子要素の伸長を許可 */
    flex-grow: 1;
    /* breakpointでレイアウトを切り替え */
    flex-basis: calc((var(--breakpoint) - 100%) * 999);
  }

  /* limit以上の子要素が存在すれば縦並びに切り替え */
  ${({ limit }) => {
    return css`
      && > :nth-last-child(n + ${limit}),
      && > :nth-last-child(n + ${limit} ~ *) {
        flex-basis: 100%;
      }
    `
  }}
`
