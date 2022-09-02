import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

export const Float = styled.span`
  float: left;

  & :not(img) {
    display: inline;
  }
`

export const Tuning = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) =>
    theme.mediaSide === 'right' &&
    css`
      flex-direction: row-reverse;
    `}
  background-color: rgb(236, 239, 241);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: ${$.grayScale.dark};
  padding: 1rem;
  gap: 1.5rem;

  & img {
    object-fit: cover;
    width: 100%;
  }

  & > :first-child {
    flex-basis: 15rem;
    flex-grow: 1;
    display: flex;
  }

  & > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: 50%;
  }
`
