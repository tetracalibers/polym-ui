import { RiDeleteBin6Line } from 'react-icons/ri'
import styled from 'styled-components'
import { IconOnly } from '../../../core/IconOnly'
import { ResetCss } from 'styled-utility-first'

const PositionManager = styled.div`
  position: relative;
`

const DeleteButton = styled(IconOnly.Button).attrs({
  icon: <RiDeleteBin6Line />,
  label: 'upload cancel',
})`
  ${ResetCss.button}

  --icon-size: 1.5rem;
  --padding: 0.25rem;

  position: absolute;
  top: calc(var(--icon-size) * -0.5);
  left: calc(var(--icon-size) * -0.5);
  font-size: var(--icon-size);
  background-image: linear-gradient(135deg, #fccf31 0%, #f55555 100%);
  box-shadow: rgb(204 219 232 / 53%) 3px 3px 6px 0px inset,
    rgb(255 255 255 / 50%) -3px -3px 6px 1px inset;
  border-radius: 1rem 1rem 0 1rem;
  padding: var(--padding);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 6rem;
  height: 6rem;
`

type MiniPreviewProps = {
  file: File
  pos: number
  deleteFn: (pos: number) => void
}

export const MiniPreview = ({ file, pos, deleteFn }: MiniPreviewProps) => {
  return (
    <PositionManager>
      <DeleteButton onClick={() => deleteFn(pos)} />
      <Img src={URL.createObjectURL(file)} />
    </PositionManager>
  )
}
