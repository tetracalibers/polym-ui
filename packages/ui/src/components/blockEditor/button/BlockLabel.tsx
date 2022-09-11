import { WithIcon } from '../../with-icon/core'
import { blockConf, BlockType } from '../module/block'
import { ActionButton, Flex, TagButton } from '../styled/blockLabel'
import _ from 'lodash'
import { TbTrash } from 'react-icons/tb'
import { MoveUpButton } from './MoveUpButton'
import { MoveDownButton } from './MoveDownButton'

export type BlockLabelProps = {
  type: BlockType
  pos: number
  maxPos: number
}

export const BlockLabel = ({ type, pos, maxPos }: BlockLabelProps) => {
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
      <ActionButton label='Delete' icon={<TbTrash />} />
    </Flex>
  )
}
