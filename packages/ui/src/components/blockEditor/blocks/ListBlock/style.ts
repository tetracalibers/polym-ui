import styled, { css } from 'styled-components'
import { editInputStyle } from '../../styled/editInput'

export const listStyle = css`
  padding-left: 1rem;
  margin: 0;
`

export const Li = styled.li`
  padding-left: 0.5rem;
`

export const Input = styled.input`
  ${editInputStyle}

  background-color: rgba(255,255,255,0.4);
  box-shadow: none;

  width: 100%;
  padding: 1rem;

  margin-bottom: 1rem;
`
