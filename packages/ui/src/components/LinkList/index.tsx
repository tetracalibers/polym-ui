import {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Anchor, AnchorCoreProps } from '../core/Anchor'
import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import { CoreUl } from './styled/core'
import { injectUnderlineStyle } from './styled/underline'
import { injectFillStyle } from './styled/fill'
import { injectBorderStyle } from './styled/border'
import { useShareState } from '@polym/hooks'

/* -------------------------------------------- */
/* CONTEXT                                      */
/* -------------------------------------------- */

type LinkListState = {
  activeNth?: number
  updateActiveNth: (id: number) => void
}

const LinkListContext = createContext<LinkListState>({} as LinkListState)

/* -------------------------------------------- */
/* LINKLIST.ITEM                                */
/* -------------------------------------------- */

type LinkItemProps = AnchorCoreProps

const _Item = ({ children, ...superProps }: LinkItemProps) => {
  return (
    <Anchor {...superProps}>
      <span>{children}</span>
    </Anchor>
  )
}

const Item = forwardRef(_Item)

/* -------------------------------------------- */

type LiProps = {
  children: ReactElement<LinkItemProps, typeof Item>
  nth: number
}

const Li = ({ children, nth }: LiProps) => {
  const { activeNth, updateActiveNth } = useContext(LinkListContext)

  const linkElement = useMemo(() => {
    return cloneElement(
      children,
      activeNth === nth ? { 'aria-current': 'page' } : {}
    )
  }, [activeNth])

  return (
    <li onClick={() => updateActiveNth(nth)} data-active={activeNth === nth}>
      {linkElement}
    </li>
  )
}

/* -------------------------------------------- */
/* LINKLIST                                     */
/* -------------------------------------------- */

const linkListCorePropsConf = {
  initialActiveNth: NotRequired<number>(1),
}

export type LinkListCoreProps = {
  children: [...ReactElement<LinkItemProps, typeof Item>[]]
} & getPropType<typeof linkListCorePropsConf>

export const defaultLinkListCoreProps = getDefaultProps<LinkListCoreProps>(
  linkListCorePropsConf
)

export const LinkList = ({
  children,
  initialActiveNth = defaultLinkListCoreProps.initialActiveNth,
  ...props
}: LinkListCoreProps) => {
  const [activeNth, setActiveNth] = useState(initialActiveNth! - 1)

  const updateActiveNth = useCallback((nth: number) => {
    setActiveNth(nth)
  }, [])

  const shareState = useShareState({ activeNth, updateActiveNth }, [activeNth])

  const items = useMemo(() => {
    return Children.map(children, (child, idx) => {
      return <Li nth={idx}>{child}</Li>
    })
  }, [])

  return (
    <LinkListContext.Provider value={shareState}>
      <CoreUl {...props}>{items}</CoreUl>
    </LinkListContext.Provider>
  )
}

LinkList.Item = Item

/* ---------------------------------------------------------------------------------------- */

/* -------------------------------------------- */
/* UNDERLINE STYLE                              */
/* -------------------------------------------- */

export const underlineHoverEffectOptions = [
  'growFromCenter',
  'growFromLeft',
  'growFromCircle',
] as const

const underlineStyleConf = {
  hoverEffect:
    NotRequired<typeof underlineHoverEffectOptions[number]>('growFromCircle'),
}

export type UnderLineLinkListProps = LinkListCoreProps &
  getPropType<typeof underlineStyleConf>

export const defaultUnderLineLinkListProps = {
  ...defaultLinkListCoreProps,
  ...getDefaultProps<UnderLineLinkListProps>(underlineStyleConf),
}

const getUnderlineVersion = (CoreComponent: typeof LinkList) => {
  const Component = styled(CoreComponent)`
    ${injectUnderlineStyle}
  `

  return ({
    children,
    hoverEffect = defaultUnderLineLinkListProps.hoverEffect,
    ...props
  }: UnderLineLinkListProps) => {
    return (
      <ThemeProvider theme={{ hoverEffect }}>
        <Component {...props}>{children}</Component>
      </ThemeProvider>
    )
  }
}

LinkList.Underline = getUnderlineVersion(LinkList)

/* -------------------------------------------- */
/* FILL STYLE                                   */
/* -------------------------------------------- */

export const fillHoverEffectOptions = [
  'fillFromLeft',
  'fillFromUnderline',
  'fillFromHorizontalLine',
] as const

const fillStyleConf = {
  hoverEffect:
    NotRequired<typeof fillHoverEffectOptions[number]>('fillFromLeft'),
}

export type FillLinkListProps = LinkListCoreProps &
  getPropType<typeof fillStyleConf>

export const defaultFillLinkListProps = {
  ...defaultLinkListCoreProps,
  ...getDefaultProps<FillLinkListProps>(fillStyleConf),
}

const getFillVersion = (CoreComponent: typeof LinkList) => {
  const Component = styled(CoreComponent)`
    ${injectFillStyle}
  `

  return ({
    children,
    hoverEffect = defaultFillLinkListProps.hoverEffect,
    ...props
  }: FillLinkListProps) => {
    return (
      <ThemeProvider theme={{ hoverEffect }}>
        <Component {...props}>{children}</Component>
      </ThemeProvider>
    )
  }
}

LinkList.Fill = getFillVersion(LinkList)

/* -------------------------------------------- */
/* BORDER STYLE                                 */
/* -------------------------------------------- */

export const borderHoverEffectOptions = ['goAround', 'twoLinesMerge'] as const

const borderStyleConf = {
  hoverEffect: NotRequired<typeof borderHoverEffectOptions[number]>('goAround'),
}

export type BorderLinkListProps = LinkListCoreProps &
  getPropType<typeof borderStyleConf>

export const defaultBorderLinkListProps = {
  ...defaultLinkListCoreProps,
  ...getDefaultProps<BorderLinkListProps>(borderStyleConf),
}

const getBorderVersion = (CoreComponent: typeof LinkList) => {
  const Component = styled(CoreComponent)`
    ${injectBorderStyle}
  `

  return ({
    children,
    hoverEffect = defaultBorderLinkListProps.hoverEffect,
    ...props
  }: BorderLinkListProps) => {
    return (
      <ThemeProvider theme={{ hoverEffect }}>
        <Component {...props}>{children}</Component>
      </ThemeProvider>
    )
  }
}

LinkList.Border = getBorderVersion(LinkList)
