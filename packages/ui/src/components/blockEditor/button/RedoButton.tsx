import { ImRedo } from 'react-icons/im'
import { BlockIconButton } from './styled'

type RedoButtonProps = {
  canRedo: boolean
  redo: () => void
}

export const RedoButton = ({ canRedo, redo }: RedoButtonProps) => {
  return (
    <BlockIconButton
      label='redo'
      icon={<ImRedo />}
      onClick={redo}
      disabled={!canRedo}
    />
  )
}
