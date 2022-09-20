import { ImUndo } from 'react-icons/im'
import { ToolIconButton } from '../styled/toolButton'

type UndoButtonProps = {
  canUndo: boolean
  undo: () => void
}

export const UndoButton = ({ canUndo, undo }: UndoButtonProps) => {
  return (
    <ToolIconButton
      label='undo'
      icon={<ImUndo />}
      onClick={undo}
      disabled={!canUndo}
    />
  )
}
