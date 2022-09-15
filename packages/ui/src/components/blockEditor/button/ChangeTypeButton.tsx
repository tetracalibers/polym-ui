import { useContext, useState } from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import styled from 'styled-components'
import { BlockEditorContext } from '..'
import { BlockType } from '../module/config'
import { StoreMap } from '../module/reducer'
import { ActionButton } from '../styled/blockLabel'
import { ChangeBoxTypeMenu } from './ChangeBoxTypeMenu'

export type ChangeTypeButtonProps<T extends BlockType> = {
  block: StoreMap[T]
}

const OpenMenuButton = styled(ActionButton)`
  background-image: linear-gradient(135deg, #ce9ffc 10%, #7367f0 100%);
`

export const ChangeTypeButton = <T extends BlockType>({
  block,
}: ChangeTypeButtonProps<T>) => {
  const { currBox, allowBox } = block
  const { dispatch } = useContext(BlockEditorContext)
  const [open, setOpenFlag] = useState(false)

  const convertible = allowBox === 'both'

  return (
    <>
      {convertible && (
        <>
          <OpenMenuButton
            label='change block type'
            icon={<BiDotsHorizontalRounded />}
            onClick={() => setOpenFlag(flag => !flag)}
          />
          {open && (
            <ul>
              <ChangeBoxTypeMenu allowBox={allowBox} currBox={currBox} />
              <li>Cancel</li>
            </ul>
          )}
        </>
      )}
    </>
  )
}
