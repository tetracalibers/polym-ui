import { ReactElement, ReactNode, useState } from 'react'
import { ResetCss } from 'styled-utility-first'
import { VisuallyHidden } from '../../../a11y-helper/VisuallyHidden'
import { Button } from '../../../core/Button/core'
import styled from 'styled-components'

const ClickAreaOrigin = styled.div`
  position: relative;
`

const ClickArea = styled(Button)`
  ${ResetCss.button}
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0);
  z-index: 10;
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

const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.5s, transform 0s 0.5s;
  transform: scale(0);

  &[data-visible='true'] {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
  }
`

const LargeImg = styled.img`
  position: relative;
  align-self: center;
  width: 80%;
  box-sizing: border-box;
  transition: 0.5s;
`

type LightBoxProps = {
  src: string
}

export const LightBox = ({ src }: LightBoxProps) => {
  const [isViewLarger, setViewLargerFlag] = useState(false)

  const label = 'Enlarge image'

  return (
    <>
      <ClickAreaOrigin>
        <ClickArea onClick={() => setViewLargerFlag(true)}>{label}</ClickArea>
        <ImgShadow $src={src}>
          <Img src={src} />
        </ImgShadow>
      </ClickAreaOrigin>
      <ModalOverlay data-visible={isViewLarger}>
        <LargeImg src={src} />
      </ModalOverlay>
    </>
  )
}
