import styled from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const FillBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  color: ${$.grayScale.dark};
  background-color: ${$.pastel.purple};
  width: 100px;
  height: 100px;
`

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
  padding: 0 1rem;
`

export const LightTextLink = styled(DarkTextLink)`
  color: ${$.grayScale.light};
`
