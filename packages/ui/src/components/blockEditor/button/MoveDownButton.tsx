import { useContext } from 'react'
import { ImMoveDown } from 'react-icons/im'
import { BlockEditorContext } from '..'
import { ActionButton } from './style/ActionButton'

export type MoveDownButtonProps = {
  pos: number
}

export const MoveDownButton = ({ pos }: MoveDownButtonProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  return (
    <ActionButton
      label='Move down one'
      icon={<ImMoveDown />}
      onClick={() =>
        dispatch({
          type: 'MOVE_DOWN',
          args: {
            old_pos: pos,
          },
        })
      }
    />
  )
}
