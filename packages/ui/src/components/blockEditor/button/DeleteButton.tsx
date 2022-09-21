import { useContext } from 'react'
import { TbTrash } from 'react-icons/tb'
import { BlockEditorContext } from '..'
import { ActionButton } from '../styled/blockLabel'
import styled from 'styled-components'

export type DeleteButtonProps = {
  id: string
}

const ExecButton = styled(ActionButton)`
  background-image: linear-gradient(135deg, #fad7a1 10%, #e96d71 100%);
`

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { dispatch } = useContext(BlockEditorContext)
  const deleteFn = () => dispatch({ type: 'DELETE', args: { id } })

  return <ExecButton label='Delete' icon={<TbTrash />} onClick={deleteFn} />
}
