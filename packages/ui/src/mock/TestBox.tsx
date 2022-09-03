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
  padding: 0 1rem;
`

export const LightTextLink = styled(DarkTextLink)`
  color: ${$.grayScale.light};
`

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

export const SliderContainer = styled(Container)``

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

export const NeedScrollPage = styled.div`
  height: 200vh;
  color: ${$.grayScale.dark};
`

export const VerticalStackChild = styled(BorderBox)`
  margin: 0 2em;
  min-height: 100px;
  height: auto;
`

export const VCenterContainer = styled(VerticalStackContainer)``

export const VCenterChild = styled(BorderBox)`
  width: 100%;
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

export const FillBox = styled.div`
  display: inline-block;
  width: auto;
  height: 38px;
  background-color: #69e3eb;
  border-radius: 2.5px 4px 4px 2.5px;
  border-left: 1.55px solid #69e3eb;

  /* This makes room for the triangle */
  margin-left: 19px;
  position: relative;
  color: white;
  line-height: 38px;
  padding: 0 10px 0 10px;

  /* Makes the triangle */
  &::before {
    content: '';
    position: absolute;
    display: block;
    left: -19px;
    width: 0;
    height: 0;
    border-top: 19px solid transparent;
    border-bottom: 19px solid transparent;
    border-right: 19px solid #69e3eb;
  }

  /* Makes the circle */
  &::after {
    content: '';
    background-color: white;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    display: block;
    position: absolute;
    left: -9px;
    top: 17px;
  }
`
