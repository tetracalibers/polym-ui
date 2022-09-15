import { WithIcon } from '../../with-icon/core'
import { blockConf, BlockType } from '../module/config'
import { Flex, TagButton } from '../styled/blockLabel'
import _ from 'lodash'
import { MoveUpButton } from './MoveUpButton'
import { MoveDownButton } from './MoveDownButton'
import { DeleteButton } from './DeleteButton'
import { ChangeTypeButton } from './ChangeTypeButton'

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
      <DeleteButton id={id} type={type} />
      <TagButton>
        <WithIcon alignItems='center'>
          {icon}
          {type}
        </WithIcon>
      </TagButton>
      {pos !== 0 && <MoveUpButton pos={pos} />}
      {pos !== maxPos && <MoveDownButton pos={pos} />}
      <ChangeTypeButton type={type} />
    </Flex>
  )
}
