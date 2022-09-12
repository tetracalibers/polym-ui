import { useState } from 'react'
import { TbTrash } from 'react-icons/tb'
import { Button } from '../../core/Button'
import { Modal } from '../../Modal'
import { ActionButton } from '../styled/blockLabel'

export type DeleteButtonProps = {}

export const DeleteButton = () => {
  const [isOpen, setOpenFlag] = useState(false)
  const openConfirm = () => setOpenFlag(true)
  const closeConfirm = () => setOpenFlag(false)

  return (
    <>
      <ActionButton label='Delete' icon={<TbTrash />} onClick={openConfirm} />
      {isOpen && (
        <Modal>
          <Modal.Title>Delete?</Modal.Title>
          <Modal.Content>
            Press the "Delete" button to delete the block.
          </Modal.Content>
          <Modal.Controls>
            <Button onClick={closeConfirm}>Cancel</Button>
            <Button>Delete</Button>
          </Modal.Controls>
        </Modal>
      )}
    </>
  )
}
