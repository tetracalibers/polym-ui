import {
  forwardRef,
  isValidElement,
  ReactNode,
  cloneElement,
  useCallback,
  useMemo,
  ReactElement,
  createContext,
} from 'react'
import { VisuallyHidden } from '../a11y-helper/VisuallyHidden'
import { BackCover, OverlayWrapper } from './styled'
import { useRegisterId, useShareId, useShareState } from '@polym/hooks'

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
  const Element = useMemo(() => {
    if (hidden) {
      return <VisuallyHidden id={'id'}>{children}</VisuallyHidden>
    }
    if (isValidElement(children)) {
      const newId = children.props.id + ' ' + 'id'
      return cloneElement(children, { id: newId })
    }
    return <div id={'id'}>{children}</div>
  }, [hidden])

  return <>{Element}</>
}

/* -------------------------------------------- */
/* CONTENTS                                     */
/* -------------------------------------------- */

type ContentProps = {
  children: ReactNode
}

const Content = ({ children }: ContentProps) => {
  return <div>{children}</div>
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
}

export const Modal = ({ children }: ModalProps) => {
  const [titleId, updateTitleId] = useShareId()
  const [contentId, updateContentId] = useShareId()

  const shareState = useShareState(
    { titleId, updateTitleId, contentId, updateContentId },
    [titleId, contentId]
  )

  return (
    <ModalContext.Provider value={shareState}>
      <BackCover />
      <OverlayWrapper
        role='dialog'
        aria-labelledby='dialog_label'
        aria-describedby='dialog_desc'
        aria-modal={true}
      >
        {children}
      </OverlayWrapper>
    </ModalContext.Provider>
  )
}

Modal.Title = Title
Modal.Content = Content
Modal.Controls = Controls
