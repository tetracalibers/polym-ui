import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'
import { match } from 'ts-pattern'

export const baseStyle = css`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;

  & > li a {
    display: block;
    padding: 1rem 2.5rem;
    box-sizing: border-box;
    text-decoration: none;
    color: ${$.grayScale.dark};
  }
`

export const CoreUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;

  & > li a {
    display: block;
    padding: 1rem 2.5rem;
    box-sizing: border-box;
    text-decoration: none;
    color: ${$.grayScale.dark};
  }

  & > li a:focus {
    outline: 2px solid ${$.pastel.water};
  }
`
