import {
  cloneElement,
  createContext,
  ReactElement,
  SyntheticEvent,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import { useNanoId, useShareState } from '@polym/hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

/* -------------------------------------------- */
/* UTILITY                                      */
/* -------------------------------------------- */

const generateButtonId = (menuId: string) => `for_${menuId}`

const joinId = (prevId: string | undefined, newId: string) => {
  return prevId ? `${prevId} ${newId}` : newId
}

/* -------------------------------------------- */
/* CONTEXT                                      */
/* -------------------------------------------- */

type PopupState = {
  menuId: string
  isOpen: boolean
  toggleOpen: (isOpen: boolean) => void
}

const PopupContext = createContext<PopupState>({} as PopupState)

/* -------------------------------------------- */
/* BUTTON                                       */
/* -------------------------------------------- */

type ButtonProps = {
  children: ReactElement<any, 'button'>
}

const Button = ({ children }: ButtonProps) => {
  const { toggleOpen, menuId, isOpen } = useContext(PopupContext)
  const onClick = children.props.onClick

  const PopupButton = cloneElement(children, {
    id: joinId(children.props.id, generateButtonId(menuId)),
    'aria-controls': menuId,
    'aria-expanded': isOpen,
    onClick: (e: SyntheticEvent<HTMLButtonElement>) => {
      toggleOpen(isOpen)
      onClick && onClick(e)
    },
  })

  return PopupButton
}

/* -------------------------------------------- */
/* MENU                                         */
/* -------------------------------------------- */

type MenuProps = {
  children: ReactElement<any, 'ul' | 'nav'>
}
const Menu = ({ children }: MenuProps) => {
  const { isOpen, menuId } = useContext(PopupContext)

  const PopupMenu = cloneElement(children, {
    id: joinId(children.props.id, menuId),
    'aria-labelledby': generateButtonId(menuId),
    'aria-hidden': !isOpen,
  })

  return <>{isOpen && PopupMenu}</>
}

/* -------------------------------------------- */
/* ROOT                                         */
/* -------------------------------------------- */

export type PopupProps = {
  children: [
    ReactElement<ButtonProps, typeof Button>,
    ReactElement<MenuProps, typeof Menu>
  ]
}

export const Popup = ({ children }: PopupProps) => {
  const [isOpen, setOpenFlag] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useNanoId()

  const close = () => setOpenFlag(false)
  const toggleOpen = useCallback((isOpen: boolean) => {
    setOpenFlag(!isOpen)
  }, [])

  const shareState = useShareState({ isOpen, toggleOpen, menuId }, [
    isOpen,
    menuId,
  ])

  useOnClickOutside(rootRef, close)

  return (
    <PopupContext.Provider value={shareState}>
      <div ref={rootRef}>{children}</div>
    </PopupContext.Provider>
  )
}

Popup.Trigger = Button
Popup.Menu = Menu
