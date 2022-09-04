import { Children, ElementType, forwardRef, ReactElement } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Anchor, AnchorCoreProps } from '../core/Anchor'
import { Li, Ul } from './styled'
import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import { CoreUl } from './styled/core'
import { injectUnderlineStyle } from './styled/underline'
import { injectFillStyle } from './styled/fill'

/* -------------------------------------------- */
/* LINKLIST.ITEM                                */
/* -------------------------------------------- */

type LinkItemProps = AnchorCoreProps

const _Item = ({ children, ...superProps }: LinkItemProps) => {
  // TODO keyが必須
  return (
    <li>
      <Anchor {...superProps}>{children}</Anchor>
    </li>
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
  ...props
}: //activeNth = defaultLinkListCoreProps.activeNth,
LinkListCoreProps) => {
  return <CoreUl {...props}>{children}</CoreUl>
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
    NotRequired<typeof underlineHoverEffectOptions[number]>('growFromCenter'),
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
  hoverEffect: NotRequired<typeof fillHoverEffectOptions[number]>(
    'fillFromHorizontalLine'
  ),
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
