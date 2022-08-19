import {
  filterEffectMixin,
  FilterEffectProps,
} from './../extension/filterEffect'
import {
  generatedContentMixin,
  GeneratedContentProps,
} from './../extension/generatedContent'
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
import {
  FormInterfaceProps,
  formInterfaceMixin,
} from '../extension/formInterface'
import {
  advancedBackgroundMixin,
  AdvancedBackgroundProps,
} from '../extension/advancedBackground'
import { transformMixin, TransformProps } from '../extension/transform'
import { writingModeMixin, WritingModeProps } from '../extension/writingMode'
import { svgMixin, SvgProps } from '../extension/svg'
import { willChangeMixin, WillChangeProps } from '../extension/willChange'

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
    'flexbox',
    /* original mixin ----------------------------- */
    'boxModel',
    'userAction',
    'listStyle',
    'outline',
    'textDecoration',
    'transition',
    'textReadable',
    'formInterface',
    'advancedBackground',
    'transform',
    'writingMode',
    'svg',
    'willChange',
    'generatedContent',
    'filterEffect',
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
    flexbox: $.FlexboxProps
    /* original mixin ----------------------------- */
    boxModel: BoxModelProps
    userAction: UserActionProps
    listStyle: ListStyleProps
    outline: OutlineProps
    textDecoration: TextDecorationProps
    transition: TransitionProps
    textReadable: TextReadableProps
    formInterface: FormInterfaceProps
    advancedBackground: AdvancedBackgroundProps
    transform: TransformProps
    writingMode: WritingModeProps
    svg: SvgProps
    willChange: WillChangeProps
    generatedContent: GeneratedContentProps
    filterEffect: FilterEffectProps
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
    flexbox: $.flexbox,
  } as const

  export const mixin = {
    boxModel: boxModelMixin,
    userAction: userActionMixin,
    listStyle: listStyleMixin,
    outline: outlineMixin,
    textDecoration: textDecorationMixin,
    transition: transitionMixin,
    textReadable: textReadableMixin,
    formInterface: formInterfaceMixin,
    advancedBackground: advancedBackgroundMixin,
    transform: transformMixin,
    writingMode: writingModeMixin,
    svg: svgMixin,
    willChange: willChangeMixin,
    generatedContent: generatedContentMixin,
    filterEffect: filterEffectMixin,
  } as const
}
