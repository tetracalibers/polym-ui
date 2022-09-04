import { Children, forwardRef, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { Anchor, AnchorCoreProps } from '../core/Anchor'
import { CharacterProps, defaultLinkListCoreProps } from './model/props'
import { Li, Ul } from './styled'

/* -------------------------------------------- */
/* LINKLIST.ITEM                                */
/* -------------------------------------------- */

type LinkItemProps = AnchorCoreProps

const _Item = ({ children, ...superProps }: LinkItemProps) => {
  // TODO keyが必須
  return (
    <Li>
      <Anchor {...superProps}>{children}</Anchor>
    </Li>
  )
}

const Item = forwardRef(_Item)

/* -------------------------------------------- */
/* LINKLIST                                     */
/* -------------------------------------------- */

type LinkListCoreProps = {
  children: [...ReactElement<LinkItemProps, typeof Item>[]]
} & CharacterProps

export const LinkList = ({
  children,
  styleType = defaultLinkListCoreProps.styleType,
}: //activeNth = defaultLinkListCoreProps.activeNth,
LinkListCoreProps) => {
  return (
    <ThemeProvider theme={{ styleType }}>
      <Ul>{children}</Ul>
    </ThemeProvider>
  )
}

/* -------------------------------------------- */

LinkList.Item = Item
