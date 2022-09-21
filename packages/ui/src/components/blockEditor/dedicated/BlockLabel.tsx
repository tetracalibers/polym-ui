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
  border-radius: 1rem 1rem 0 0;
  background: radial-gradient(
      105.68% 45.69% at 92.95% 50%,
      rgb(105 244 253 / 0%) 0%,
      rgba(160, 255, 244, 0.095) 53.91%,
      rgba(254, 216, 255, 0) 100%
    ),
    radial-gradient(
      103.18% 103.18% at 90.11% 102.39%,
      #c9fff2a1 0%,
      rgba(230, 255, 250, 0) 100%
    ),
    radial-gradient(
      90.45% 90.45% at 87.84% 9.55%,
      #ffd2f5 0%,
      rgba(254, 219, 246, 0) 100%
    ),
    linear-gradient(
      135.66deg,
      rgba(203, 185, 255, 0.8) 14.89%,
      rgba(216, 202, 254, 0) 74.33%
    );
  background-blend-mode: normal, normal, normal, normal, normal, normal;
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
