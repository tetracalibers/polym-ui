import { WithIcon } from '../../with-icon/core'
import { blockConf, BlockType } from '../module/block'
import { ActionButton, Flex, TagButton } from '../styled/blockLabel'
import _ from 'lodash'
import { ImMoveDown, ImMoveUp } from 'react-icons/im'
import { TbTrash } from 'react-icons/tb'
import { useContext } from 'react'
import { BlockEditorContext } from '..'

export type BlockLabelProps = {
  type: BlockType
  pos: number
}

export const BlockLabel = ({ type, pos }: BlockLabelProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const icon = _.find(blockConf, { type })?.icon

  return (
    <Flex>
      <TagButton>
        <WithIcon alignItems='center'>
          {icon}
          {type}
        </WithIcon>
      </TagButton>
      {pos !== 0 && (
        <ActionButton
          label='Move up one'
          icon={<ImMoveUp />}
          onClick={() =>
            dispatch({
              type: 'MOVE_UP',
              args: {
                old_pos: pos,
              },
            })
          }
        />
      )}
      <ActionButton label='Move down one' icon={<ImMoveDown />} />
      <ActionButton label='Delete' icon={<TbTrash />} />
    </Flex>
  )
}
