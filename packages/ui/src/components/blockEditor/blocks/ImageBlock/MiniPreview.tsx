import styled from 'styled-components'

const Img = styled.img`
  width: 5rem;
  height: 5rem;
`

type MiniPreviewProps = {
  file: File
}

export const MiniPreview = ({ file }: MiniPreviewProps) => {
  return <Img src={URL.createObjectURL(file)} />
}
