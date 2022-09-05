import {
  ReactElement,
  ReactNode,
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
  useLayoutEffect,
  SyntheticEvent,
  KeyboardEvent,
  useEffect,
} from 'react'
import { useNanoId, useShareState } from '@polym/hooks'
import { ToggleHidden } from './styled'
import { Anchor } from '../core/Anchor'
import { match } from 'ts-pattern'
import _ from 'lodash'
import { CoreUl } from '../LinkList/styled/core'
import {
  getBorderLinkList,
  getFillLinkList,
  getUnderlineLinkList,
  LinkListStylePropsAs,
} from '../LinkList'

/* -------------------------------------------- */
/* UTILITY                                      */
/* -------------------------------------------- */

const generateTabId = (panelId: string) => `for_${panelId}`
const returnPanelId = (tabId: string, prefix = 'for_') =>
  tabId.replace(prefix, '')

/* -------------------------------------------- */
/* HOOK                                         */
/* -------------------------------------------- */

type Panel = {
  panelId: string
  title: string
}

export const useTabPanels = () => {
  const [collection, updateCollection] = useState<Panel[]>([])

  const addItem = useCallback((title: string, panelId: string) => {
    updateCollection(collection => {
      if (collection.findIndex(item => item.panelId === panelId) > 0) {
        return collection
      } else {
        return [...collection, { title, panelId }]
      }
    })
  }, [])

  return [collection, addItem] as const
}

// li > a という構成ならいつでも使える
export const useShiftLink = (updateFn: (id: string) => void) => {
  const shiftByClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    updateFn(e.currentTarget.id)
  }

  const parent = (e: SyntheticEvent) => {
    return e.currentTarget.parentElement
  }

  const getPrevTab = (e: SyntheticEvent) => {
    return parent(e)?.previousElementSibling?.firstElementChild as HTMLElement
  }

  const getNextTab = (e: SyntheticEvent) => {
    return parent(e)?.nextElementSibling?.firstElementChild as HTMLElement
  }

  const shiftByArrowKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    match(e.key)
      .with('ArrowLeft', () => {
        const leftTab = getPrevTab(e)
        if (leftTab) {
          leftTab.focus()
          updateFn(leftTab.id)
        }
      })
      .with('ArrowRight', () => {
        const rightTab = getNextTab(e)
        if (rightTab) {
          rightTab.focus()
          updateFn(rightTab.id)
        }
      })
      .otherwise(() => {})
  }

  return [shiftByClick, shiftByArrowKeyDown] as const
}

/* -------------------------------------------- */
/* CONTEXT                                      */
/* -------------------------------------------- */

type TabState = {
  activePanelId?: string
  updateActivePanelId: (id: string) => void
  addPanel: (title: string, panelId: string) => void
}

const TabContext = createContext<TabState>({} as TabState)

/* -------------------------------------------- */
/* TITLE LIST ITEM (PRIVATE)                    */
/* -------------------------------------------- */

type TitleTabProps = {
  children: ReactNode
  panelId: string
  tabId: string
}

const TitleTab = ({ children, panelId, tabId }: TitleTabProps) => {
  const { activePanelId, updateActivePanelId } = useContext(TabContext)
  const [onAnchorClick, onAnchorKeyDown] = useShiftLink((tabId: string) =>
    updateActivePanelId(returnPanelId(tabId))
  )

  return (
    <li role='presentation' data-active={activePanelId === panelId}>
      <Anchor
        href={'#' + panelId}
        role='tab'
        aria-controls={panelId}
        aria-selected={activePanelId === panelId}
        aria-expanded={activePanelId === panelId}
        id={tabId}
        tabIndex={activePanelId === panelId ? 0 : -1}
        onClick={onAnchorClick}
        onKeyDown={onAnchorKeyDown}
      >
        <span>{children}</span>
      </Anchor>
    </li>
  )
}

/* -------------------------------------------- */
/* TITLE LIST (PRIVATE)                         */
/* -------------------------------------------- */

type TitleTabListProps = {
  children: [...ReactElement<TitleTabProps, typeof TitleTab>[]]
}

const TitleTabList = ({ children, ...props }: TitleTabListProps) => {
  return (
    <CoreUl role='tablist' {...props}>
      {children}
    </CoreUl>
  )
}

TitleTabList.Fill = getFillLinkList(TitleTabList)
TitleTabList.Border = getBorderLinkList(TitleTabList)
TitleTabList.Underline = getUnderlineLinkList(TitleTabList)

/* -------------------------------------------- */
/* PANEL                                        */
/* -------------------------------------------- */

type PanelProps = {
  title: string
  children: ReactNode
}

const Panel = ({ title, children }: PanelProps) => {
  const { addPanel, activePanelId } = useContext(TabContext)

  const panelId = useNanoId()
  const tabId = generateTabId(panelId)

  useLayoutEffect(() => {
    addPanel(title, panelId)
  }, [])

  return (
    <ToggleHidden
      id={panelId}
      aria-labelledby={tabId}
      role='tabpanel'
      aria-hidden={activePanelId !== panelId}
      tabIndex={0}
    >
      {children}
    </ToggleHidden>
  )
}

/* -------------------------------------------- */
/* ROOT                                         */
/* -------------------------------------------- */

type TabProps<ListTheme extends keyof typeof TitleTabList> = {
  titleStyleFn?: (title: string) => ReactElement
  titleTabListTheme?: ListTheme
  // 2つ以上の子を持つよう強制
  children: [...ReactElement<PanelProps, typeof Panel>[]]
} & LinkListStylePropsAs[ListTheme]

export const Tab = <ListTheme extends keyof typeof TitleTabList>({
  titleStyleFn,
  titleTabListTheme,
  children,
  ...styleProps
}: TabProps<ListTheme>) => {
  const [activePanelId, setActivePanelId] = useState<string>()
  const [panels, addPanel] = useTabPanels()

  const updateActivePanelId = useCallback((id: string) => {
    setActivePanelId(id)
  }, [])

  const shareState = useShareState(
    { activePanelId, addPanel, updateActivePanelId },
    [activePanelId]
  )

  const titleList = useMemo(() => {
    const items = panels.map(({ panelId, title }) => {
      return (
        <TitleTab
          key={panelId}
          panelId={panelId}
          tabId={generateTabId(panelId)}
        >
          {titleStyleFn ? titleStyleFn(title) : title}
        </TitleTab>
      )
    })

    if (titleTabListTheme) {
      const theme = titleTabListTheme
      const Component = TitleTabList[theme] as any
      return <Component {...styleProps}>{items}</Component>
    }

    return <TitleTabList>{items}</TitleTabList>
  }, [panels])

  // 最初は1つ目のタブをアクティブ化
  useEffect(() => {
    if (panels.length > 0) {
      setActivePanelId(panels[0].panelId)
    }
  }, [panels])

  return (
    <TabContext.Provider value={shareState}>
      {titleList}
      {children}
    </TabContext.Provider>
  )
}

Tab.Panel = Panel
