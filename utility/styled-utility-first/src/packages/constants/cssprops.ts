import * as $ from 'styled-system'
import { boxModelMixin, BoxModelProps } from '../extension/boxModel'
import { cursorMixin, CursorProps } from '../extension/cursor'
import { listStyleMixin, ListStyleProps } from '../extension/listStyle'
import { outlineMixin, OutlineProps } from '../extension/outline'

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
    'cursor',
    'listStyle',
    'outline',
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
    cursor: CursorProps
    listStyle: ListStyleProps
    outline: OutlineProps
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
    cursor: cursorMixin,
    listStyle: listStyleMixin,
    outline: outlineMixin,
  } as const
}
