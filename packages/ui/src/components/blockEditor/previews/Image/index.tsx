import styled from 'styled-components'
import { LightBox } from '../../reusable/LightBox'

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem 1rem;
  margin: 0;
  border-radius: 1rem;
`

const Figcaption = styled.figcaption`
  width: 100%;
  text-align: center;
  color: #b0bec5;
`

type ImagePreviewProps = {
  url: string
  caption?: string
}

export const ImagePreview = ({ url, caption }: ImagePreviewProps) => {
  return (
    <Figure>
      <LightBox src={url} />
      <Figcaption>{caption}</Figcaption>
    </Figure>
  )
}
