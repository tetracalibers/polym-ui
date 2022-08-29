import { Children, ComponentPropsWithoutRef, ReactNode, useState } from 'react'
import { useNanoId } from '../../hooks/useNanoId'
import { DetailWrapper, SummaryButton } from '../styled'

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
  ...attrs
}: PanelInnerProps & ComponentPropsWithoutRef<'button'>) => {
  return (
    <SummaryButton
      type='button'
      aria-expanded={isOpen}
      aria-controls={detailId}
      id={summaryId}
      key={detailId}
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
