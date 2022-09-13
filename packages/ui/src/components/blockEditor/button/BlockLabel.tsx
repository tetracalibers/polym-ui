import { WithIcon } from '../../with-icon/core'
import { blockConf, BlockType } from '../module/config'
import { Flex, TagButton } from '../styled/blockLabel'
import _ from 'lodash'
import { MoveUpButton } from './MoveUpButton'
import { MoveDownButton } from './MoveDownButton'
import { DeleteButton } from './DeleteButton'

export type BlockLabelProps = {
  type: BlockType
  pos: number
  maxPos: number
  id: string
}

export const BlockLabel = ({ type, pos, maxPos, id }: BlockLabelProps) => {
  const icon = _.find(blockConf, { type })?.icon

  return (
    <Flex>
      <TagButton>
        <WithIcon alignItems='center'>
          {icon}
          {type}
        </WithIcon>
      </TagButton>
      {pos !== 0 && <MoveUpButton pos={pos} />}
      {pos !== maxPos && <MoveDownButton pos={pos} />}
      <DeleteButton id={id} type={type} />
    </Flex>
  )
}
