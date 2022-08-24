import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette } from 'styled-utility-first'

export const StyledElement = styled.div<CharacterProps>`
  --space: ${({ space }) => space};
  --justify-content: ${({ justifyContent }) => justifyContent};
  --align-items: ${({ alignItems }) => alignItems};

  display: flex;
  flex-wrap: wrap;
  gap: var(--space);
  justify-content: var(--justify-content);
  align-items: var(--align-items);
`
