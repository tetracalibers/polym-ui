import { Children, forwardRef, ReactElement, useMemo } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Anchor, AnchorCoreProps } from '../core/Anchor'
import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import { CoreUl } from './styled/core'
import { injectUnderlineStyle } from './styled/underline'
import { injectFillStyle } from './styled/fill'
import { injectBorderStyle } from './styled/border'

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
/* LINKLIST                                     */
/* -------------------------------------------- */

const linkListCorePropsConf = {
  activeNth: NotRequired<number>(1),
}

export type LinkListCoreProps = {
  children: [...ReactElement<LinkItemProps, typeof Item>[]]
} & getPropType<typeof linkListCorePropsConf>

export const defaultLinkListCoreProps = getDefaultProps<LinkListCoreProps>(
  linkListCorePropsConf
)

export const LinkList = ({
  children,
  activeNth = defaultLinkListCoreProps.activeNth,
  ...props
}: LinkListCoreProps) => {
  const listItem = useMemo(() => {
    return Children.map(children, (child, idx) => (
      <li data-active={activeNth === idx + 1}>{child}</li>
    ))
  }, [activeNth])

  return <CoreUl {...props}>{listItem}</CoreUl>
}

LinkList.Item = Item

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
