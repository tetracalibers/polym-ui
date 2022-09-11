import { BlockType } from '../module/block'
import { TagButton } from '../styled/blockLabel'

export type BlockLabelProps = {
  type: BlockType
}

export const BlockLabel = ({ type }: BlockLabelProps) => {
  return <TagButton>{type}</TagButton>
}
