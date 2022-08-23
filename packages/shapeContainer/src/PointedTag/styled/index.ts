import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import React from 'react'

const thisCss = css<CharacterProps>`
  display: inline-block;
  width: ${({ width }) => width};
  height: 38px;
  background-color: #69e3eb;
  border-radius: 2.5px 4px 4px 2.5px;
  border-left: 1.55px solid #69e3eb;

  /* This makes room for the triangle */
  margin-left: 19px;
  position: relative;
  color: white;
  line-height: 38px;
  padding: 0 10px 0 10px;

  /* Makes the triangle */
  &::before {
    content: '';
    position: absolute;
    display: block;
    left: -19px;
    width: 0;
    height: 0;
    border-top: 19px solid transparent;
    border-bottom: 19px solid transparent;
    border-right: 19px solid #69e3eb;
  }

  /* Makes the circle */
  &::after {
    content: '';
    background-color: white;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    display: block;
    position: absolute;
    left: -9px;
    top: 17px;
  }
`

export const getStyledElement = <As extends React.ElementType>(
  baseAs: As
) => styled(baseAs)`
  ${thisCss}
`
