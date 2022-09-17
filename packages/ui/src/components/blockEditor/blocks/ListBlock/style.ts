import styled, { css } from 'styled-components'
import { editInputStyle } from '../../styled/editInput'

export const Input = styled.input`
  ${editInputStyle}

  background-color: rgba(255,255,255,0.4);
  box-shadow: none;

  width: 100%;
  padding: 1rem;

  margin-bottom: 1rem;
`
