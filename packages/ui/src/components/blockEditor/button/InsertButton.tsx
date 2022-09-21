import { ReactElement, useContext } from 'react'
import { IconOnlyCoreProps } from '../../core/IconOnly'
import { BlowingTag } from '../../tag/BlowingTag'
import { BlockType } from '../core/config'
import { ToolIconButton } from '../styled/toolButton'
import { withToolTip } from '../reusable/tooltip/withToolTip'
import { Text } from '../../Text'
import { BlockEditorContext } from '..'

type InsertButtonProps = {
  type: BlockType
  icon: ReactElement
}

const HoverTipButton = withToolTip<IconOnlyCoreProps>(ToolIconButton)

export const InsertButton = ({ type, icon }: InsertButtonProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  return (
    <HoverTipButton
      label={type}
      icon={icon}
      onClick={() => dispatch({ type: 'INSERT', args: { type } })}
      tip={
        <BlowingTag>
          <Text color='#fff'>{type}</Text>
        </BlowingTag>
      }
    />
  )
}
