import { ImUndo } from 'react-icons/im'
import { HistoryButton, HistoryButtonShadow } from './style/HistoryButton'

type UndoButtonProps = {
  canUndo: boolean
  undo: () => void
}

export const UndoButton = ({ canUndo, undo }: UndoButtonProps) => {
  return (
    <HistoryButtonShadow>
      <HistoryButton
        label='undo'
        onClick={undo}
        disabled={!canUndo}
        icon={<ImUndo />}
      />
    </HistoryButtonShadow>
  )
}
