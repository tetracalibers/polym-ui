import { Children, ElementType, forwardRef, ReactElement } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Anchor, AnchorCoreProps } from '../core/Anchor'
import { Li, Ul } from './styled'
import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import { CoreUl } from './styled/core'

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
  className?: string
  theme?: object
} & getPropType<typeof linkListCorePropsConf>

export const defaultLinkListCoreProps = getDefaultProps<LinkListCoreProps>(
  linkListCorePropsConf
)

export const LinkList = ({
  children,
  className,
  theme,
  ...props
}: //activeNth = defaultLinkListCoreProps.activeNth,
LinkListCoreProps) => {
  return (
    <CoreUl {...props} className={className}>
      {children}
    </CoreUl>
  )
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

export const UnderlineLinkList = ({
  children,
  hoverEffect = defaultUnderLineLinkListProps.hoverEffect,
  ...props
}: UnderLineLinkListProps) => {
  return (
    <ThemeProvider theme={{ hoverEffect }}>
      <LinkList {...props} className='_underline__cdde0ee7'>
        {children}
      </LinkList>
    </ThemeProvider>
  )
}

/* -------------------------------------------- */
/* FILL STYLE                                   */
/* -------------------------------------------- */

/* -------------------------------------------- */
/* BORDER STYLE                                 */
/* -------------------------------------------- */
