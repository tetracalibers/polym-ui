import { Text } from '../../Text'
import { BiRightArrow } from 'react-icons/bi'
import { PositionManager } from '../styled/insertHere'

export const InsertHere = () => {
  return (
    <PositionManager>
      <BiRightArrow color='#fff' />
      <Text.Glow color='#fff'>Insert Here ?</Text.Glow>
    </PositionManager>
  )
}
