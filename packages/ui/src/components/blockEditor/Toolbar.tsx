import { ReactElement, SyntheticEvent } from 'react'
import { IconOnly } from '../core/IconOnly'
import { BlockType } from './module/block'

type ToolbarProps = {
  type: BlockType
  icon: ReactElement
  insertFn: (e: SyntheticEvent) => void
}

export const Toolbar = ({ type, icon, insertFn }: ToolbarProps) => {
  return <IconOnly.Button label={type} icon={icon} onClick={insertFn} />
}
