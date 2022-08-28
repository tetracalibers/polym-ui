import { Children, createContext, ReactNode, useContext } from 'react'
import { useNanoId } from '../../hooks/useNanoId'

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
}

const Summary = ({ children, summaryId, detailId }: PanelInnerProps) => {
  return (
    <button
      type='button'
      aria-expanded='true'
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

const Detail = ({ children, detailId, summaryId }: PanelInnerProps) => {
  return (
    <div id={detailId} role='region' aria-labelledby={summaryId}>
      {children}
    </div>
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

  return (
    <>
      <Summary detailId={detailId} summaryId={summaryId}>
        {summary}
      </Summary>
      <Detail detailId={detailId} summaryId={summaryId}>
        {detail}
      </Detail>
    </>
  )
}

/* -------------------------------------------- */

Accordion.Panel = Panel
