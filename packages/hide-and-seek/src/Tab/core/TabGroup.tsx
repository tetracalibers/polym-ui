import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import { nanoid } from 'nanoid'

type TabInfo = {
  panelId: string
  title: string
}

type TabState = {
  activePanelId: string
  addItem: (title: string, key: string) => void
}

const TabGroupContext = createContext<TabState>({} as TabState)

type TabGroupProps = {
  children: ReactNode
}

const generateTabId = (panelId: string) => `tab-for-${panelId}`

export const TabGroup = ({ children }: TabGroupProps) => {
  const [activePanelId, setActivePanelId] = useState('')
  const [tabs, updateTabs] = useState<TabInfo[]>([])

  const addTab = useCallback((title: string, panelId: string) => {
    updateTabs(tabs => {
      if (tabs.findIndex(item => item.panelId === panelId) > 0) {
        return tabs
      } else {
        return [...tabs, { title, panelId }]
      }
    })
  }, [])

  const state = useMemo<TabState>(
    () => ({
      activePanelId,
      addItem: addTab,
    }),
    [activePanelId, tabs]
  )

  return (
    <TabGroupContext.Provider value={state}>
      <ul role='tablist'>
        {tabs.map(({ panelId, title }) => (
          <li role='presentation' key={panelId}>
            <a
              href={'#' + panelId}
              role='tab'
              aria-controls={panelId}
              aria-selected={activePanelId === panelId}
              aria-expanded={activePanelId === panelId}
              id={generateTabId(panelId)}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
      {children}
    </TabGroupContext.Provider>
  )
}

/* -------------------------------------------- */

type PanelProps = {
  children: ReactNode
  tabTitle: string
}

const Panel = ({ children, tabTitle }: PanelProps) => {
  const { activePanelId, addItem } = useContext(TabGroupContext)

  const thisId = nanoid()
  const tabId = generateTabId(thisId)

  useLayoutEffect(() => {
    addItem(tabTitle, thisId)
  }, [])

  return (
    <div
      id={thisId}
      aria-labelledby={tabId}
      role='tabpanel'
      aria-hidden={activePanelId !== tabId}
    >
      {children}
    </div>
  )
}

/* -------------------------------------------- */

TabGroup.Panel = Panel
