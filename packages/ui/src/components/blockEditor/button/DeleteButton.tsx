import { TbTrash } from 'react-icons/tb'
import { ActionButton } from '../styled/blockLabel'

export type DeleteButtonProps = {}

export const DeleteButton = () => {
  return <ActionButton label='Delete' icon={<TbTrash />} />
}
