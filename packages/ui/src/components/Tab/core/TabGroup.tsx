import {
  createContext,
  ReactNode,
  SyntheticEvent,
  useContext,
  useLayoutEffect,
  useState,
  KeyboardEvent,
  useRef,
  forwardRef,
  Children,
  ComponentPropsWithoutRef,
} from 'react'
import { Wrapper } from '../styled'
import { match } from 'ts-pattern'
import _ from 'lodash'
import { useComposite, useNanoId, useShareState } from '@polym/hooks'
import { PolymorphicRef } from '../../../types/polymorphic/standard'

type TabState = {
  activePanelId: string
  addTab: (tabComponent: ReactNode, id: string) => void
}

const TabGroupContext = createContext<TabState>({} as TabState)

type TabGroupProps = {
  children: ReactNode
}

const generateTabId = (panelId: string) => `for-${panelId}`

/* -------------------------------------------- */

type TitleTabListProps = {
  children: ReactNode[]
}

const TitleTabList = forwardRef(
  ({ children }: TitleTabListProps, ref?: PolymorphicRef<'ul'>) => {
    return (
      <ul role='tablist' ref={ref}>
        {children}
      </ul>
    )
  }
)

/* -------------------------------------------- */

export const TabGroup = ({ children }: TabGroupProps) => {
  const [activePanelId, setActivePanelId] = useState('')
  const [tabs, addTab] = useComposite()
  const tablistEref = useRef<HTMLUListElement>(null)

  const state = useShareState({ activePanelId, addTab }, [activePanelId, tabs])

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
      <TitleTabList ref={tablistEref}>
        {tabs.map(({ id, node }) => (
          <TitleTab
            key={id}
            tabId={generateTabId(id)}
            panelId={id}
            onClick={e => onToggleTab(e, id)}
            onKeyDown={onKeyDownForMoveTab}
          >
            {node}
          </TitleTab>
        ))}
      </TitleTabList>
      {children}
    </TabGroupContext.Provider>
  )
}

/* -------------------------------------------- */

type InnerAtomicComponentProps = {
  children: ReactNode
  tabId: string
  panelId: string
}

const TitleTab = ({
  children,
  tabId,
  panelId,
  ...anchorAttrs
}: InnerAtomicComponentProps & ComponentPropsWithoutRef<'a'>) => {
  const { activePanelId } = useContext(TabGroupContext)

  return (
    <li role='presentation' key={panelId}>
      <a
        href={'#' + panelId}
        role='tab'
        aria-controls={panelId}
        aria-selected={activePanelId === panelId}
        aria-expanded={activePanelId === panelId}
        id={tabId}
        tabIndex={activePanelId === panelId ? 0 : -1}
        {...anchorAttrs}
      >
        {children}
      </a>
    </li>
  )
}

const ContentsPanel = ({
  children,
  tabId,
  panelId,
}: InnerAtomicComponentProps) => {
  const { activePanelId } = useContext(TabGroupContext)
  return (
    <Wrapper
      id={panelId}
      aria-labelledby={tabId}
      role='tabpanel'
      aria-hidden={activePanelId !== panelId}
      tabIndex={0}
    >
      {children}
    </Wrapper>
  )
}

/* -------------------------------------------- */

type TabProps = {
  children: [ReactNode, ReactNode]
}

const Tab = ({ children }: TabProps) => {
  const { addTab } = useContext(TabGroupContext)

  const panelId = useNanoId()
  const tabId = generateTabId(panelId)

  const [title, contents] = Children.toArray(children)

  useLayoutEffect(() => {
    addTab(title, panelId)
  }, [])

  const injectProps = {
    panelId,
    tabId,
  }

  return <ContentsPanel {...injectProps}>{contents}</ContentsPanel>
}

/* -------------------------------------------- */

TabGroup.Tab = Tab
