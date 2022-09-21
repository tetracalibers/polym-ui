import { ImUndo } from 'react-icons/im'
import { BlockIconButton } from './styled'

type UndoButtonProps = {
  canUndo: boolean
  undo: () => void
}

export const UndoButton = ({ canUndo, undo }: UndoButtonProps) => {
  return (
    <BlockIconButton
      label='undo'
      icon={<ImUndo />}
      onClick={undo}
      disabled={!canUndo}
    />
  )
}
