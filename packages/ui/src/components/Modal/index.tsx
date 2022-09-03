import {
  isValidElement,
  ReactNode,
  cloneElement,
  useMemo,
  ReactElement,
  createContext,
  useContext,
  Children,
  useState,
} from 'react'
import { VisuallyHidden } from '../a11y-helper/VisuallyHidden'
import { BackCover, CloseButton, OverlayWrapper } from './styled'
import { useRegisterId, useShareId, useShareState } from '@polym/hooks'
import { AiOutlineClose } from 'react-icons/ai'

/* -------------------------------------------- */
/* CONTEXT                                      */
/* -------------------------------------------- */

type ModalState = {
  titleId?: string
  contentId?: string
  updateTitleId: (id: string) => void
  updateContentId: (id: string) => void
}

const ModalContext = createContext<ModalState>({} as ModalState)

/* -------------------------------------------- */
/* TITLE                                        */
/* -------------------------------------------- */

type TitleProps = {
  children: ReactNode
  hidden?: boolean
}

const Title = ({ children, hidden = false }: TitleProps) => {
  const { titleId, updateTitleId } = useContext(ModalContext)
  useRegisterId(undefined, updateTitleId)

  return hidden ? (
    <VisuallyHidden id={titleId}>{children}</VisuallyHidden>
  ) : (
    <div id={titleId}>{children}</div>
  )
}

/* -------------------------------------------- */
/* CONTENTS                                     */
/* -------------------------------------------- */

type ContentProps = {
  children: ReactNode
}

const Content = ({ children }: ContentProps) => {
  const { contentId, updateContentId } = useContext(ModalContext)
  useRegisterId(undefined, updateContentId)

  return <div id={contentId}>{children}</div>
}

/* -------------------------------------------- */
/* CONTROLS                                     */
/* -------------------------------------------- */

type ControlsProps = {
  children: ReactNode
}

const Controls = ({ children }: ControlsProps) => {
  return <div>{children}</div>
}

/* -------------------------------------------- */
/* ROOT                                         */
/* -------------------------------------------- */

export type ModalProps = {
  children: [
    ReactElement<TitleProps, typeof Title>,
    ReactElement<ContentProps, typeof Content>,
    ReactElement<ControlsProps, typeof Controls>
  ]
  open: boolean
}

export const Modal = ({ children, open }: ModalProps) => {
  const [titleId, updateTitleId] = useShareId()
  const [contentId, updateContentId] = useShareId()

  const shareState = useShareState(
    { titleId, updateTitleId, contentId, updateContentId },
    [titleId, contentId]
  )

  const [isOpen, setOpenStatus] = useState(open)
  const closeAction = () => setOpenStatus(false)

  return (
    <ModalContext.Provider value={shareState}>
      {isOpen && (
        <>
          <BackCover />
          <OverlayWrapper
            role='dialog'
            aria-labelledby={titleId}
            aria-describedby={contentId}
            aria-modal={true}
          >
            {children}
            <CloseButton onClick={closeAction}>
              <AiOutlineClose aria-hidden='true' />
              <VisuallyHidden>Close</VisuallyHidden>
            </CloseButton>
          </OverlayWrapper>
        </>
      )}
    </ModalContext.Provider>
  )
}

Modal.Title = Title
Modal.Content = Content
Modal.Controls = Controls
