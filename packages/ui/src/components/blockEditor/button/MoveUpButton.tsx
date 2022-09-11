import { useContext } from 'react'
import { ImMoveUp } from 'react-icons/im'
import { BlockEditorContext } from '..'
import { ActionButton } from '../styled/blockLabel'

export type MoveUpButtonProps = {
  pos: number
}

export const MoveUpButton = ({ pos }: MoveUpButtonProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  return (
    <ActionButton
      label='Move up one'
      icon={<ImMoveUp />}
      onClick={() =>
        dispatch({
          type: 'MOVE_UP',
          args: {
            old_pos: pos,
          },
        })
      }
    />
  )
}
