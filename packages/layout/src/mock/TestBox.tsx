import styled from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`

export const BorderBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: ${$.pastel.purple}66;
  color: ${$.vivid.green};
  height: 100px;
`

export const VerticalStackContainer = styled(Container)`
  height: 200vh;
`

export const VerticalStackChild = styled(BorderBox)`
  margin: 0 2em;
  min-height: 100px;
  height: auto;
`

export const HStackContainer = styled(Container)``

export const HStackChild = styled(BorderBox)`
  width: 150px;
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
