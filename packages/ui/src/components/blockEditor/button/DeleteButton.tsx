import { useState } from 'react'
import { GrAlert } from 'react-icons/gr'
import { TbTrash } from 'react-icons/tb'
import { Button } from '../../core/Button'
import { Modal } from '../../Modal'
import { Text } from '../../Text'
import { Alert } from '../styled/Alert'
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
          <Modal.Title>
            <Alert>
              <GrAlert />
            </Alert>
          </Modal.Title>
          <Modal.Content>
            <Text fontSizeV={1.25} color='#EA005E'>
              Press the
              <Text fontSizeV={2} color='#EA005E'>
                "Delete"
              </Text>
              button to delete the block.
            </Text>
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
