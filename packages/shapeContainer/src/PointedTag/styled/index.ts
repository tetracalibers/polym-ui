import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import React from 'react'

const thisCss = css<CharacterProps>`
  display: inline-block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 2.5px 4px 4px 2.5px;
  border-left: 1.55px solid ${({ backgroundColor }) => backgroundColor};

  /* This makes room for the triangle */
  margin-left: calc(${({ height }) => height} / 2);
  position: relative;
  color: ${({ color }) => color};
  line-height: ${({ height }) => height};

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
    border-right: calc(${({ height }) => height} / 2) solid
      ${({ backgroundColor }) => backgroundColor};
  }

  /* Makes the circle */
  &::after {
    content: '';
    background-color: ${({ color }) => color};
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
