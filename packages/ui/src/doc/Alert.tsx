import styled from 'styled-components'
import { ColorPalette as $, ResetCss, Truthy } from 'styled-utility-first'
import { GrAlert } from 'react-icons/gr'

const Marker = styled.span`
  background: linear-gradient(transparent 0%, #ffff66 0%);
  color: ${$.grayScale.dark};
  padding: 0 0.5em;
  line-height: 2;
`

const WrapIcon = styled.div`
  font-size: 2em;
  padding-right: 1rem;

  & path {
    fill: ${$.grayScale.light};
    stroke: ${$.grayScale.dark};
  }
`

const AlertCard = styled.div`
  padding: 1.5em;
  color: white;
  background-color: rgb(240, 98, 146);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
`

export const CannotIncludeInteractiveElements = () => {
  return (
    <>
      <AlertCard>
        <WrapIcon>
          <GrAlert />
        </WrapIcon>
        <div>
          If you include an <Marker>a</Marker> tag, a <Marker>button</Marker>{' '}
          tag, or a tag with the <Marker>tabIndex</Marker>
          attribute specified, an error will be displayed by the::after
          pseudo-element because it violates the HTML specification
        </div>
      </AlertCard>
    </>
  )
}
