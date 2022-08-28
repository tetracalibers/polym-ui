import { createContext, ReactNode, useContext } from 'react'

/* -------------------------------------------- */

const AccordionContext = createContext({})

type AccordionProps = {
  children: ReactNode
}

export const Accordion = ({ children }: AccordionProps) => {
  return (
    <AccordionContext.Provider value={{}}>{children}</AccordionContext.Provider>
  )
}

/* -------------------------------------------- */

type PanelProps = {
  children: ReactNode
  title: string
}

const Panel = ({ children, title }: PanelProps) => {
  return <>{children}</>
}

/* -------------------------------------------- */

Accordion.Panel = Panel
