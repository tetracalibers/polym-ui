import * as $ from 'styled-system'
import { boxModelMixin, BoxModelProps } from '../extension/boxModel'
import { userActionMixin, UserActionProps } from '../extension/userAction'
import { listStyleMixin, ListStyleProps } from '../extension/listStyle'
import { outlineMixin, OutlineProps } from '../extension/outline'
import {
  textDecorationMixin,
  TextDecorationProps,
} from '../extension/textDecoration'
import { transitionMixin, TransitionProps } from '../extension/transition'
import { textReadableMixin, TextReadableProps } from '../extension/textReadable'

export namespace StyledSystem {
  const propsCategory = [
    /* styled-system ------------------------------ */
    'space',
    'color',
    'typography',
    'position',
    'layout',
    'background',
    'border',
    'position',
    'shadow',
    /* original mixin ----------------------------- */
    'boxModel',
    'userAction',
    'listStyle',
    'outline',
    'textDecoration',
    'transition',
    'textReadable',
  ] as const

  export type PropsCategory = typeof propsCategory[number]

  export type Props = {
    /* styled-system ------------------------------ */
    space: $.SpaceProps
    color: $.ColorProps
    typography: $.TypographyProps
    layout: $.LayoutProps
    background: $.BackgroundProps
    border: $.BorderProps
    position: $.PositionProps
    shadow: $.ShadowProps
    /* original mixin ----------------------------- */
    boxModel: BoxModelProps
    userAction: UserActionProps
    listStyle: ListStyleProps
    outline: OutlineProps
    textDecoration: TextDecorationProps
    transition: TransitionProps
    textReadable: TextReadableProps
  }

  export const styleFn = {
    space: $.space,
    color: $.color,
    typography: $.typography,
    layout: $.layout,
    background: $.background,
    border: $.border,
    position: $.position,
    shadow: $.shadow,
  } as const

  export const mixin = {
    boxModel: boxModelMixin,
    userAction: userActionMixin,
    listStyle: listStyleMixin,
    outline: outlineMixin,
    textDecoration: textDecorationMixin,
    transition: transitionMixin,
    textReadable: textReadableMixin,
  } as const
}
