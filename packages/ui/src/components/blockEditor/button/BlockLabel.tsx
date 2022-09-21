import { WithIcon } from '../../with-icon/core'
import { BlockType } from '../core/config'
import { Flex, TagButton } from '../styled/blockLabel'
import _ from 'lodash'
import { MoveUpButton } from './MoveUpButton'
import { MoveDownButton } from './MoveDownButton'
import { DeleteButton } from './DeleteButton'
import { ConvertMenu } from '../convert'
import { BlockStateMap } from '../core/store'

export type BlockLabelProps<T extends BlockType> = {
  block: BlockStateMap[T]
  pos: number
  maxPos: number
}

export const BlockLabel = <T extends BlockType>({
  pos,
  maxPos,
  block,
}: BlockLabelProps<T>) => {
  const { icon, type, id } = block

  return (
    <Flex>
      <DeleteButton id={id} />
      <TagButton>
        <WithIcon alignItems='center'>
          {icon}
          {type}
        </WithIcon>
      </TagButton>
      {pos !== 0 && <MoveUpButton pos={pos} />}
      {pos !== maxPos && <MoveDownButton pos={pos} />}
      <ConvertMenu block={block} />
    </Flex>
  )
}
