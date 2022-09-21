import { ImRedo } from 'react-icons/im'
import { HistoryButton, HistoryButtonShadow } from './style/HistoryButton'

type RedoButtonProps = {
  canRedo: boolean
  redo: () => void
}

export const RedoButton = ({ canRedo, redo }: RedoButtonProps) => {
  return (
    <HistoryButtonShadow>
      <HistoryButton
        label='redo'
        icon={<ImRedo />}
        onClick={redo}
        disabled={!canRedo}
      />
    </HistoryButtonShadow>
  )
}
