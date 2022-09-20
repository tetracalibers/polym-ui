import { WithIcon } from '../../with-icon/core'
import { BlockType } from '../core/config'
import { Flex, TagButton } from '../styled/blockLabel'
import _ from 'lodash'
import { MoveUpButton } from './MoveUpButton'
import { MoveDownButton } from './MoveDownButton'
import { DeleteButton } from './DeleteButton'
import { ChangeTypeButton } from './ChangeTypeButton'
import { StoreMap } from '../core/reducer'

export type BlockLabelProps<T extends BlockType> = {
  block: StoreMap[T]
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
      <DeleteButton id={id} type={type} />
      <TagButton>
        <WithIcon alignItems='center'>
          {icon}
          {type}
        </WithIcon>
      </TagButton>
      {pos !== 0 && <MoveUpButton pos={pos} />}
      {pos !== maxPos && <MoveDownButton pos={pos} />}
      <ChangeTypeButton block={block} />
    </Flex>
  )
}
