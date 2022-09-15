import { useContext, useState } from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import styled from 'styled-components'
import { match } from 'ts-pattern'
import { BlockEditorContext } from '..'
import { BlockType } from '../module/config'
import { ActionButton } from '../styled/blockLabel'

export type ChangeTypeButtonProps = {
  type: BlockType
}

const OpenMenuButton = styled(ActionButton)`
  background-image: linear-gradient(135deg, #ce9ffc 10%, #7367f0 100%);
`

export const ChangeTypeButton = ({ type }: ChangeTypeButtonProps) => {
  const { dispatch } = useContext(BlockEditorContext)
  const [open, setOpenFlag] = useState(false)

  return (
    <>
      <OpenMenuButton
        label='change block type'
        icon={<BiDotsHorizontalRounded />}
        onClick={() => setOpenFlag(flag => !flag)}
      />
      {open && (
        <ul>
          <li>To Inline</li>
          <li>To Block</li>
          <li>Cancel</li>
        </ul>
      )}
    </>
  )
}
