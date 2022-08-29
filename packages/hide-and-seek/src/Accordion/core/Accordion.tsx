import { Children, createContext, ReactNode, useContext, useState } from 'react'
import { useNanoId } from '../../hooks/useNanoId'
import { DetailWrapper } from '../styled'

/* -------------------------------------------- */

type AccordionProps = {
  children: ReactNode
}

export const Accordion = ({ children }: AccordionProps) => {
  return <>{children}</>
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
}: PanelInnerProps) => {
  return (
    <button
      type='button'
      aria-expanded={isOpen}
      aria-controls={detailId}
      id={summaryId}
      key={detailId}
    >
      <div className='accordion-title'>
        {children}
        <span className='accordion-icon'></span>
      </div>
    </button>
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

  const injectProps = {
    detailId,
    summaryId,
    isOpen,
  }

  return (
    <>
      <Summary {...injectProps}>{summary}</Summary>
      <Detail {...injectProps}>{detail}</Detail>
    </>
  )
}

/* -------------------------------------------- */

Accordion.Panel = Panel
