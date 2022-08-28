import {
  createContext,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  KeyboardEvent,
  useRef,
} from 'react'
import { nanoid } from 'nanoid'
import { Wrapper } from '../styled'
import { match } from 'ts-pattern'
import _ from 'lodash'

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
  const tablistEref = useRef<HTMLUListElement>(null)

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

  const onToggleTab = (e: SyntheticEvent, panelId: string) => {
    e.preventDefault()
    setActivePanelId(panelId)
  }

  const getActiveId = (e: SyntheticEvent) =>
    e.currentTarget.attributes.getNamedItem('aria-controls')?.value

  const getTabElement = (panelId: string) =>
    tablistEref.current?.querySelector(
      '#' + generateTabId(panelId)
    ) as HTMLElement

  const onKeyDownForMoveTab = (e: KeyboardEvent<HTMLAnchorElement>) => {
    match(e.key)
      .with('ArrowLeft', () => {
        const activeId = getActiveId(e)
        // prettier-ignore
        const leftPanelId = _.last(_.takeWhile(tabs, o => o.panelId !== activeId))?.panelId
        if (leftPanelId) {
          const leftTab = getTabElement(leftPanelId)
          leftTab?.focus()
          setActivePanelId(leftPanelId)
        }
      })
      .with('ArrowRight', () => {
        const activeId = getActiveId(e)
        // prettier-ignore
        const rightPanelId = _.first(_.takeRightWhile(tabs, o => o.panelId !== activeId))?.panelId
        if (rightPanelId) {
          const rightTab = getTabElement(rightPanelId)
          rightTab?.focus()
          setActivePanelId(rightPanelId)
        }
      })
      .otherwise(() => {})
  }

  useLayoutEffect(() => {
    if (tabs.length > 0) {
      setActivePanelId(tabs[0].panelId)
    }
  }, [tabs])

  return (
    <TabGroupContext.Provider value={state}>
      <ul role='tablist' ref={tablistEref}>
        {tabs.map(({ panelId, title }) => (
          <li role='presentation' key={panelId}>
            <a
              href={'#' + panelId}
              role='tab'
              aria-controls={panelId}
              aria-selected={activePanelId === panelId}
              aria-expanded={activePanelId === panelId}
              id={generateTabId(panelId)}
              onClick={e => onToggleTab(e, panelId)}
              tabIndex={activePanelId === panelId ? 0 : -1}
              onKeyDown={onKeyDownForMoveTab}
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

  const thisId = useMemo(() => nanoid(), [])
  const tabId = generateTabId(thisId)

  useLayoutEffect(() => {
    addItem(tabTitle, thisId)
  }, [])

  return (
    <Wrapper
      id={thisId}
      aria-labelledby={tabId}
      role='tabpanel'
      aria-hidden={activePanelId !== thisId}
      tabIndex={0}
    >
      {children}
    </Wrapper>
  )
}

/* -------------------------------------------- */

TabGroup.Panel = Panel
