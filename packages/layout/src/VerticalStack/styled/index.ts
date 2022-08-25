import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { Truthy } from 'styled-utility-first'

export const StyledElement = styled.div<CharacterProps>`
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
  ${({ recursive, space }) => {
    return recursive
      ? css`
          && * + * {
            margin-top: ${space};
          }
        `
      : css`
          && > * + * {
            margin-top: ${space};
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
