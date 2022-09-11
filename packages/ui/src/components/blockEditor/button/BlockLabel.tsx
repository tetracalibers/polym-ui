import { WithIcon } from '../../with-icon/core'
import { blockConf, BlockType } from '../module/block'
import { ActionButton, Flex, TagButton } from '../styled/blockLabel'
import _ from 'lodash'
import { ImMoveDown, ImMoveUp } from 'react-icons/im'
import { TbTrash } from 'react-icons/tb'

export type BlockLabelProps = {
  type: BlockType
}

export const BlockLabel = ({ type }: BlockLabelProps) => {
  const icon = _.find(blockConf, { type })?.icon

  return (
    <Flex>
      <TagButton>
        <WithIcon alignItems='center'>
          {icon}
          {type}
        </WithIcon>
      </TagButton>
      <ActionButton>
        <ImMoveUp />
      </ActionButton>
      <ActionButton>
        <ImMoveDown />
      </ActionButton>
      <ActionButton>
        <TbTrash />
      </ActionButton>
    </Flex>
  )
}
