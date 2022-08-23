import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import React from 'react'

const thisCss = css<CharacterProps>`
  display: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #69e3eb;
  border-radius: 2.5px 4px 4px 2.5px;
  border-left: 1.55px solid #69e3eb;

  /* This makes room for the triangle */
  margin-left: calc(${({ height }) => height} / 2);
  position: relative;
  color: white;
  line-height: ${({ height }) => height};
  padding: 0 10px 0 10px;

  /* Makes the triangle */
  &::before {
    content: '';
    position: absolute;
    display: block;
    left: calc(-1 * ${({ height }) => height} / 2);
    width: 0;
    height: 0;
    border-top: calc(${({ height }) => height} / 2) solid transparent;
    border-bottom: calc(${({ height }) => height} / 2) solid transparent;
    border-right: calc(${({ height }) => height} / 2) solid #69e3eb;
  }

  /* Makes the circle */
  &::after {
    content: '';
    background-color: white;
    border-radius: 50%;
    width: calc(${({ height }) => height} / 9.5);
    height: calc(${({ height }) => height} / 9.5);
    display: block;
    position: absolute;
    left: calc(-1 * ${({ height }) => height} / 9.5 * 2);
    top: calc(${({ height }) => height} / 2.2);
  }
`

export const getStyledElement = <As extends React.ElementType>(
  baseAs: As
) => styled(baseAs)`
  ${thisCss}
`
