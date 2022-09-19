import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
`

type ImagePreviewProps = {
  url: string
}

export const ImagePreview = ({ url }: ImagePreviewProps) => {
  return <Img src={url} />
}
