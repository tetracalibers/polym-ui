import _ from 'lodash'
import {
  Children,
  ComponentPropsWithoutRef,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useNanoId, useShareState } from '@polym/hooks'
import { DetailWrapper, SummaryButton } from '../styled'

/* -------------------------------------------- */

type AccordionProps = {
  children: ReactNode
  openOneOnly?: boolean
}

type AccordionState = {
  openOneOnly: boolean
  activePanelId: string[]
  updateActivePanelId: Dispatch<SetStateAction<string[]>>
}

const AccordionContext = createContext({} as AccordionState)

export const Accordion = ({
  children,
  openOneOnly = false,
}: AccordionProps) => {
  const [activePanelId, updateActivePanelId] = useState<string[]>([])

  const state = useShareState(
    { openOneOnly, activePanelId, updateActivePanelId },
    [openOneOnly, activePanelId]
  )

  return (
    <AccordionContext.Provider value={state}>
      {children}
    </AccordionContext.Provider>
  )
}

/* -------------------------------------------- */

type PanelInnerProps = {
  children: ReactNode
  detailId: string
  summaryId: string
  isOpen: boolean
}

const Summary = ({
  children,
  summaryId,
  detailId,
  isOpen,
  ...attrs
}: PanelInnerProps & ComponentPropsWithoutRef<'button'>) => {
  return (
    <SummaryButton
      type='button'
      aria-expanded={isOpen}
      aria-controls={detailId}
      id={summaryId}
      {...attrs}
    >
      {children}
    </SummaryButton>
  )
}

/* -------------------------------------------- */

const Detail = ({ children, detailId, summaryId, isOpen }: PanelInnerProps) => {
  return (
    <DetailWrapper
      id={detailId}
      role='region'
      aria-labelledby={summaryId}
      aria-hidden={!isOpen}
      tabIndex={0}
    >
      {children}
    </DetailWrapper>
  )
}

/* -------------------------------------------- */

type PanelProps = {
  children: [ReactNode, ReactNode]
}

const Panel = ({ children }: PanelProps) => {
  const { openOneOnly, updateActivePanelId, activePanelId } =
    useContext(AccordionContext)

  const detailId = useNanoId()
  const summaryId = 'for-' + detailId

  const [summary, detail] = Children.toArray(children)

  const [isOpen, setOpenStatus] = useState(false)

  useEffect(() => {
    setOpenStatus(activePanelId.includes(detailId))
  }, [activePanelId])

  const open = () => {
    if (openOneOnly) {
      updateActivePanelId([detailId])
    } else {
      updateActivePanelId([...activePanelId, detailId])
    }
  }

  const close = () => {
    updateActivePanelId(_.without(activePanelId, detailId))
  }

  const toggleOpen = () => (isOpen ? close() : open())

  const injectProps = {
    detailId,
    summaryId,
    isOpen,
  }

  return (
    <>
      <Summary {...injectProps} onClick={toggleOpen}>
        {summary}
      </Summary>
      <Detail {...injectProps}>{detail}</Detail>
    </>
  )
}

/* -------------------------------------------- */

Accordion.Panel = Panel
