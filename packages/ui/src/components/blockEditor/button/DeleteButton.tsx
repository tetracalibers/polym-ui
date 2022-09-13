import { useContext, useState } from 'react'
import { GrAlert } from 'react-icons/gr'
import { TbTrash } from 'react-icons/tb'
import { BlockEditorContext } from '..'
import { Button } from '../../core/Button/core'
import { HorizontalCenter } from '../../layout-algorithm/HorizontalCenter'
import { Modal } from '../../Modal'
import { Text } from '../../Text'
import { Alert } from '../styled/Alert'
import { ActionButton } from '../styled/blockLabel'

export type DeleteButtonProps = {
  id: string
  type: string
}

export const DeleteButton = ({ id, type }: DeleteButtonProps) => {
  const [isOpen, setOpenFlag] = useState(false)
  const openConfirm = () => setOpenFlag(true)
  const closeConfirm = () => setOpenFlag(false)

  const { dispatch } = useContext(BlockEditorContext)
  const execDelete = () => dispatch({ type: 'DELETE', args: { key: id } })

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
            <HorizontalCenter textCenter>
              <p>
                The button to delete the <Text fontSizeV={1.5}>{type}</Text>{' '}
                block has been clicked.
              </p>
              <Text fontSizeV={2} color='#EA005E'>
                Delete?
              </Text>
            </HorizontalCenter>
          </Modal.Content>
          <Modal.Controls>
            <Button onClick={closeConfirm}>Cancel</Button>
            <Button onClick={execDelete}>Delete</Button>
          </Modal.Controls>
        </Modal>
      )}
    </>
  )
}
