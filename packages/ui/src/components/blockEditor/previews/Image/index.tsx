import styled from 'styled-components'

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem 1rem;
  margin: 0;
  border-radius: 1rem;
`

const ImgShadow = styled.div<{ $src: string }>`
  position: relative;
  padding: 0;
  width: 500px;
  max-width: 90%;
  margin: 0 auto;

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
      <ImgShadow $src={url}>
        <Img src={url} />
      </ImgShadow>
      <Figcaption>{caption}</Figcaption>
    </Figure>
  )
}
