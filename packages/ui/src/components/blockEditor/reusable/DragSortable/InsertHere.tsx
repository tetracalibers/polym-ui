import { Text } from '../../../Text'
import { BiRightArrow } from 'react-icons/bi'
import styled from 'styled-components'

export const PositionManager = styled.div`
  position: relative;

  /* icon */
  & > :first-child {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: -1.5rem;
  }
`

export const InsertHere = () => {
  return (
    <PositionManager>
      <BiRightArrow color='#fff' />
      <Text.Glow color='#fff'>Insert Here ?</Text.Glow>
    </PositionManager>
  )
}
