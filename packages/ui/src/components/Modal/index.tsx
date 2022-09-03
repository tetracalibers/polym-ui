import { forwardRef, ReactNode } from 'react'
import { BackCover, OverlayWrapper } from './styled'

export type ModalProps = {
  children: ReactNode
}

const _Modal = ({ children }: ModalProps) => {
  return (
    <>
      <BackCover />
      <OverlayWrapper
        role='dialog'
        aria-labelledby='dialog_label'
        aria-describedby='dialog_desc'
        aria-modal={true}
      >
        {children}
      </OverlayWrapper>
    </>
  )
}

export const Modal = forwardRef(_Modal)
