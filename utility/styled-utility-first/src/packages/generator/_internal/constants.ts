import type * as $ from 'styled-system'
import { config } from '../../config/props'

export namespace Const {
  export namespace FromStyledSystem {
    const propsCategory = [
      'space',
      'color',
      'typography',
      'position',
      'layout',
      'background',
      'border',
      'position',
      'shadow',
    ] as const

    export type PropsCategory = typeof propsCategory[number]

    export type Props = {
      space: $.SpaceProps
      color: $.ColorProps
      typography: $.TypographyProps
      layout: $.LayoutProps
      background: $.BackgroundProps
      border: $.BorderProps
      position: $.PositionProps
      shadow: $.ShadowProps
    }
  }

  export namespace GroupingBased {
    export type PropsMap = typeof config
    export type PropsCategory = keyof PropsMap
  }
}
