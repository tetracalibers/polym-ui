import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'

const thisCss = css<CharacterProps>`
  position: relative;
  width: 50px;
  height: calc(50px * 0.66);
  background: #333;
  border-radius: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: calc(50px * 0.13) solid transparent;
    border-top-color: #333;
    border-bottom: 0;
    margin-left: calc(50px * 0.13 * -1);
    margin-bottom: calc(50px * 0.13 * -1);
  }
`

export const getStyledElement = <As extends ElementType>(baseAs: As) => styled(
  baseAs
)`
  ${thisCss}
`
