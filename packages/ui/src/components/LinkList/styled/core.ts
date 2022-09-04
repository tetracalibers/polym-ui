import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { injectUnderlineStyle } from './underline'

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

  ${injectUnderlineStyle}
`
