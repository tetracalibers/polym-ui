import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'

export const StyledElement = styled.div<CharacterProps>`
  && {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ space }) => space};
  }

  && > * > * {
    /* 子要素の伸長を許可 */
    flex-grow: 1;
    /* breakpointでレイアウトを切り替え */
    flex-basis: calc((${({ breakpoint }) => breakpoint} - 100%) * 999);
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
