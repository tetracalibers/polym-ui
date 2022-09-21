import { WithIcon } from '../../with-icon/core'
import { BlockType } from '../core/config'
import _ from 'lodash'
import { MoveUpButton } from '../button/MoveUpButton'
import { MoveDownButton } from '../button/MoveDownButton'
import { DeleteButton } from '../button/DeleteButton'
import { ConvertMenu } from '../convert'
import { BlockStateMap } from '../core/store'
import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

const Tag = styled.div`
  color: #697dab;
  padding: 0.25em 0.75em;
  font-size: 1rem;
  height: 2rem;
  margin-right: auto;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  border-radius: 0 1rem;
  background-image: linear-gradient(-225deg, #e3fdf566 0%, #fff4fdb8 100%);
  box-shadow: rgb(136 165 191 / 48%) 0px 0px 16px 0px,
    inset rgb(255 255 255 / 80%) -3px -2px 13px 0px;
`

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
      <Tag>
        <WithIcon alignItems='center'>
          {icon}
          {type}
        </WithIcon>
      </Tag>
      {pos !== 0 && <MoveUpButton pos={pos} />}
      {pos !== maxPos && <MoveDownButton pos={pos} />}
      <ConvertMenu block={block} />
    </Flex>
  )
}
