import styled from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const DarkTextBox = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  color: ${$.grayScale.dark};
`

export const LightTextBox = styled(DarkTextBox)`
  color: ${$.grayScale.light};
`

export const DarkTextLink = styled.a`
  color: ${$.grayScale.dark};
  text-decoration: none;
`

export const LightTextLink = styled(DarkTextLink)`
  color: ${$.grayScale.light};
`
