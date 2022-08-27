import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { Truthy } from 'styled-utility-first'

export const StyledElement = styled.div<CharacterProps>`
  --margin-top: ${({ spaceV, spaceU }) => `${spaceV}${spaceU}`};

  && {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  && > * {
    /* 既存の垂直marginを削除 */
    margin-top: 0;
    margin-bottom: 0;
  }

  /* 連続する要素にだけmargin適用 */
  ${({ recursive }) => {
    return recursive
      ? css`
          && * + * {
            margin-top: var(--margin-top);
          }
        `
      : css`
          && > * + * {
            margin-top: var(--margin-top);
          }
        `
  }}

  ${({ separateFrom }) => {
    return Truthy(separateFrom).when(css`
      && > :nth-child(${separateFrom}) {
        margin-bottom: auto;
      }
    `)
  }}
`
