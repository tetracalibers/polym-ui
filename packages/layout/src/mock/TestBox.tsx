import styled from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  color: ${$.grayScale.dark}66;
`

export const BorderBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: ${$.pastel.purple}66;
  color: ${$.vivid.green};
  height: 100px;
`

export const SliderContainer = styled(Container)`
  padding: 1rem;
`

export const SliderChild = styled(BorderBox)`
  width: 200px;
`

export const GridChild = styled(BorderBox)`
  height: 200px;
`

export const OverlayBox = styled(BorderBox)`
  background-color: ${$.grayScale.dark};
  height: auto;
  width: auto;
  color: ${$.grayScale.light};
`

export const AFrameContainer = styled(BorderBox)`
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  height: 100%;
  width: 100%;
  box-sizing: padding-box;
`

export const DStackContainer = styled(Container)``

export const DStackChild = styled(BorderBox)`
  width: fit-content;
  padding: 1rem;
  height: auto;
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

export const Sidebar = styled(BorderBox)`
  height: 300px;
`

export const MainContents = styled(BorderBox)`
  height: 300px;
  background-color: ${$.pastel.pink}66;
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
