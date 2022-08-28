import {
  ComponentPropsWithoutRef,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type TabGroupContextValue = {
  activeTabId?: string
  setActiveTabId?: Dispatch<SetStateAction<string>>
}

const TabGroupContext = createContext<TabGroupContextValue>({})

type TabGroupProps = {
  children: ReactNode
}

export const TabGroup = ({ children }: TabGroupProps) => {
  const [activeTabId, setActiveTabId] = useState('')

  return (
    <TabGroupContext.Provider value={{ activeTabId, setActiveTabId }}>
      {children}
    </TabGroupContext.Provider>
  )
}

/* -------------------------------------------- */

type TabProps = {
  children: ReactNode
  panelId: string
  id: string
} & ComponentPropsWithoutRef<'li'>

const Tab = ({ children, panelId, id, ...attrs }: TabProps) => {
  const { activeTabId } = useContext(TabGroupContext)

  return (
    <li role='presentation' {...attrs}>
      <a
        href={`#${panelId}`}
        role='tab'
        aria-controls={panelId}
        aria-selected={activeTabId === panelId}
        aria-expanded={activeTabId === panelId}
        id={id}
      >
        {children}
      </a>
    </li>
  )
}

/* -------------------------------------------- */

type TabListProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'ul'>

const TabList = ({ children, ...attrs }: TabListProps) => {
  return (
    <ul role='tablist' {...attrs}>
      {children}
    </ul>
  )
}

/* -------------------------------------------- */

type PanelProps = {
  children: ReactNode
  id: string
  tabId: string
}

const Panel = ({ children, id, tabId }: PanelProps) => {
  const { activeTabId } = useContext(TabGroupContext)

  return (
    <div
      id={id}
      aria-labelledby={tabId}
      role='tabpanel'
      aria-hidden={activeTabId !== tabId}
    >
      {children}
    </div>
  )
}

/* -------------------------------------------- */

TabGroup.Tab = Tab
TabGroup.TabList = TabList
TabGroup.Panel = Panel
