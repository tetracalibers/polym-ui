import styled from 'styled-components'

const Figure = styled.figure<{ $src: string }>`
  position: relative;
  padding: 0;
  width: 500px;
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-image: url(${({ $src }) => $src});
    background-size: 100% 100%;
    filter: blur(10px) saturate(2);
  }
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 3px;
  z-index: 1;
  /* z-indexを有効化するためのposition指定 */
  position: relative;
`

type ImagePreviewProps = {
  url: string
  caption?: string
}

export const ImagePreview = ({ url, caption }: ImagePreviewProps) => {
  return (
    <Figure $src={url}>
      <Img src={url} />
      <figcaption>{caption}</figcaption>
    </Figure>
  )
}
