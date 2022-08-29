import {
  createContext,
  ReactNode,
  SyntheticEvent,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  KeyboardEvent,
  useRef,
} from 'react'
import { Wrapper } from '../styled'
import { match } from 'ts-pattern'
import _ from 'lodash'
import { useComposite } from '../../hooks/useComposite'
import { useNanoId } from '../../hooks/useNanoId'

type TabState = {
  activePanelId: string
  addTab: (name: string, id: string) => void
}

const TabGroupContext = createContext<TabState>({} as TabState)

type TabGroupProps = {
  children: ReactNode
}

const generateTabId = (panelId: string) => `tab-for-${panelId}`

export const TabGroup = ({ children }: TabGroupProps) => {
  const [activePanelId, setActivePanelId] = useState('')
  const [tabs, addTab] = useComposite()
  const tablistEref = useRef<HTMLUListElement>(null)

  const state = useMemo<TabState>(
    () => ({
      activePanelId,
      addTab,
    }),
    [activePanelId, tabs]
  )

  const onToggleTab = (e: SyntheticEvent, panelId: string) => {
    e.preventDefault()
    setActivePanelId(panelId)
  }

  const getActiveId = (e: SyntheticEvent) =>
    e.currentTarget.attributes.getNamedItem('aria-controls')?.value

  // prettier-ignore
  const getTabElement = (panelId: string) =>
    tablistEref.current?.querySelector('#' + generateTabId(panelId)) as HTMLElement

  const onKeyDownForMoveTab = (e: KeyboardEvent<HTMLAnchorElement>) => {
    match(e.key)
      .with('ArrowLeft', () => {
        const activeId = getActiveId(e)
        // prettier-ignore
        const leftPanelId = _.last(_.takeWhile(tabs, o => o.id !== activeId))?.id
        if (leftPanelId) {
          const leftTab = getTabElement(leftPanelId)
          leftTab?.focus()
          setActivePanelId(leftPanelId)
        }
      })
      .with('ArrowRight', () => {
        const activeId = getActiveId(e)
        // prettier-ignore
        const rightPanelId = _.first(_.takeRightWhile(tabs, o => o.id !== activeId))?.id
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
      setActivePanelId(tabs[0].id)
    }
  }, [tabs])

  return (
    <TabGroupContext.Provider value={state}>
      <ul role='tablist' ref={tablistEref}>
        {tabs.map(({ id, name }) => (
          <li role='presentation' key={id}>
            <a
              href={'#' + id}
              role='tab'
              aria-controls={id}
              aria-selected={activePanelId === id}
              aria-expanded={activePanelId === id}
              id={generateTabId(id)}
              onClick={e => onToggleTab(e, id)}
              tabIndex={activePanelId === id ? 0 : -1}
              onKeyDown={onKeyDownForMoveTab}
            >
              {name}
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
  const { activePanelId, addTab } = useContext(TabGroupContext)

  const thisId = useNanoId()
  const tabId = generateTabId(thisId)

  useLayoutEffect(() => {
    addTab(tabTitle, thisId)
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
