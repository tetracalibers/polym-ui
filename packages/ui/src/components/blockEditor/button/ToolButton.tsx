import { ReactElement, SyntheticEvent } from 'react'
import { IconOnlyCoreProps } from '../../core/IconOnly'
import { BlowingTag } from '../../tag/BlowingTag'
import { BlockType } from '../module/block'
import { ToolIconButton } from '../styled/toolButton'
import { withToolTip } from './withToolTip'

type ToolButtonProps = {
  type: BlockType
  icon: ReactElement
  insertFn: (e: SyntheticEvent) => void
}

const HoverTipButton = withToolTip<IconOnlyCoreProps>(ToolIconButton)

export const ToolButton = ({ type, icon, insertFn }: ToolButtonProps) => {
  return (
    <HoverTipButton
      label={type}
      icon={icon}
      onClick={insertFn}
      tip={<BlowingTag>{type}</BlowingTag>}
    />
  )
}
