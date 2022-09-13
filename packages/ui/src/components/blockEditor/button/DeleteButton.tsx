import { useContext, useState } from 'react'
import { GrAlert } from 'react-icons/gr'
import { TbTrash } from 'react-icons/tb'
import { BlockEditorContext } from '..'
import { DifferStack } from '../../layout-algorithm/DifferStack'
import { HorizontalCenter } from '../../layout-algorithm/HorizontalCenter'
import { Modal } from '../../Modal'
import { Text } from '../../Text'
import { Alert } from '../styled/Alert'
import { ActionButton } from '../styled/blockLabel'
import { CancelButton } from './CancelButton'
import { DangerButton } from './DangerButton'

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
              <Text fontSizeV={2} color='#f83600'>
                Delete?
              </Text>
            </HorizontalCenter>
          </Modal.Content>
          <Modal.Controls>
            <DifferStack justifyContent={'space-evenly'}>
              <CancelButton onClick={closeConfirm}>Cancel</CancelButton>
              <DangerButton onClick={execDelete}>Delete</DangerButton>
            </DifferStack>
          </Modal.Controls>
        </Modal>
      )}
    </>
  )
}
