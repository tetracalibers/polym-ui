import {
  Children,
  ComponentPropsWithoutRef,
  createContext,
  ReactNode,
  useState,
} from 'react'
import { useNanoId } from '../../hooks/useNanoId'
import { DetailWrapper, SummaryButton } from '../styled'

/* -------------------------------------------- */

type AccordionProps = {
  children: ReactNode
  openOneOnly?: boolean
}

const AccordionContext = createContext({
  openOneOnly: false,
  activePanelId: '',
})

export const Accordion = ({
  children,
  openOneOnly = false,
}: AccordionProps) => {
  const [activePanelId, setActivePanelId] = useState('')

  return (
    <AccordionContext.Provider value={{ openOneOnly, activePanelId }}>
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
  const detailId = useNanoId()
  const summaryId = 'for-' + detailId

  const [summary, detail] = Children.toArray(children)

  const [isOpen, setOpenStatus] = useState(false)
  const toggleOpen = () => setOpenStatus(!isOpen)

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
