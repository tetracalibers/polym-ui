import { ReactElement, SyntheticEvent } from 'react'
import { IconOnly } from '../core/IconOnly'
import { BlockType } from './module/block'
import { ToolIconButton } from './styled/toolbar'

type ToolbarProps = {
  type: BlockType
  icon: ReactElement
  insertFn: (e: SyntheticEvent) => void
}

export const Toolbar = ({ type, icon, insertFn }: ToolbarProps) => {
  return <ToolIconButton label={type} icon={icon} onClick={insertFn} />
}
