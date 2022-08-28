import { createContext, ReactNode, useContext } from 'react'
import { useAssociate } from '../../hooks/useAssociate'
import { useComposite } from '../../hooks/useComposite'
import { useShareState } from '../../hooks/useShareState'
import { useId } from '../../hooks/useId'

/* -------------------------------------------- */

type ShareState = {
  associate: (name: string, id: string) => void
  getTriggerId: (id: string) => string
}
const AccordionContext = createContext<ShareState>({} as ShareState)

type AccordionProps = {
  children: ReactNode
}

export const Accordion = ({ children }: AccordionProps) => {
  const [panels, addPanels] = useComposite()
  const [associate, getTriggerId] = useAssociate(addPanels)
  const shareState = useShareState<ShareState>({ associate, getTriggerId }, [
    panels,
  ])

  return (
    <AccordionContext.Provider value={shareState}>
      {panels.map(({ id, name }) => (
        <button
          type='button'
          aria-expanded='true'
          aria-controls={id}
          id={getTriggerId(id)}
          key={id}
        >
          <span className='accordion-title'>
            {name}
            <span className='accordion-icon'></span>
          </span>
        </button>
      ))}
      {children}
    </AccordionContext.Provider>
  )
}

/* -------------------------------------------- */

type PanelProps = {
  children: ReactNode
  title: string
}

const Panel = ({ children, title }: PanelProps) => {
  const { associate, getTriggerId } = useContext(AccordionContext)
  const id = useId()
  associate(title, id)

  return (
    <div id={id} role='region' aria-labelledby={getTriggerId(id)}>
      {children}
    </div>
  )
}

/* -------------------------------------------- */

Accordion.Panel = Panel
