import { Children, createContext, ReactNode, useContext } from 'react'
import { useNanoId } from '../../hooks/useNanoId'

/* -------------------------------------------- */

type AccordionProps = {
  children: ReactNode
}

export const Accordion = ({ children }: AccordionProps) => {
  return <>{children}</>
}

const PanelContext = createContext({
  detailId: '',
  summaryId: '',
})

/* -------------------------------------------- */

type SummaryProps = {
  children: ReactNode
}

const Summary = ({ children }: SummaryProps) => {
  const { detailId, summaryId } = useContext(PanelContext)

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

type DetailProps = {
  children: ReactNode
}

const Detail = ({ children }: DetailProps) => {
  const { detailId, summaryId } = useContext(PanelContext)

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
    <PanelContext.Provider value={{ detailId, summaryId }}>
      <Summary>{summary}</Summary>
      <Detail>{detail}</Detail>
    </PanelContext.Provider>
  )
}

/* -------------------------------------------- */

Accordion.Panel = Panel
