import { ImRedo } from 'react-icons/im'
import { ToolIconButton } from '../styled/toolButton'

type RedoButtonProps = {
  canRedo: boolean
  redo: () => void
}

export const RedoButton = ({ canRedo, redo }: RedoButtonProps) => {
  return (
    <>
      {canRedo && (
        <ToolIconButton label='redo' icon={<ImRedo />} onClick={redo} />
      )}
    </>
  )
}
