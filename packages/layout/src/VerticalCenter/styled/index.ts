import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette, Truthy } from 'styled-utility-first'

const centering = (central: CharacterProps['central']) => {
  if (typeof central === 'number') {
    return css`
      & > :first-child {
        margin-top: 0;
      }

      & > :last-child {
        margin-bottom: 0;
      }

      & > :nth-child(${central}) {
        margin-top: auto;
        margin-bottom: auto;
      }
    `
  } else {
    return css`
      & > :first-child:not(${central}) {
        margin-top: 0;
      }

      & > :last-child:not(${central}) {
        margin-bottom: 0;
      }

      & > ${central} {
        margin-top: auto;
        margin-bottom: auto;
      }
    `
  }
}

export const StyledElement = styled.div<CharacterProps>`
  --space: ${({ spaceV, spaceU }) => `${spaceV}${spaceU}`};
  --padding: ${({ paddingV, paddingU }) => `${paddingV}${paddingU}`};
  --min-height: ${({ minHeightV, minHeightU }) => `${minHeightV}${minHeightU}`};

  && {
    display: flex;
    flex-direction: column;
    min-height: var(--min-height);
    padding: var(--padding);
    box-sizing: border-box;
  }

  & > * {
    /* 各子要素に上下のmarginを設定 */
    margin-top: var(--space);
    margin-bottom: var(--space);
  }

  ${({ central }) => centering(central)}
`
