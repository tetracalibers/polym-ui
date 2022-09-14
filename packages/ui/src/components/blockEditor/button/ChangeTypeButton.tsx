import { useContext } from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import styled from 'styled-components'
import { BlockEditorContext } from '..'
import { ActionButton } from '../styled/blockLabel'

export type ChangeTypeButtonProps = {}

const OpenMenuButton = styled(ActionButton)`
  background-image: linear-gradient(135deg, #ce9ffc 10%, #7367f0 100%);
`

export const ChangeTypeButton = ({}: ChangeTypeButtonProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  return (
    <OpenMenuButton
      label='change block type'
      icon={<BiDotsHorizontalRounded />}
    />
  )
}
