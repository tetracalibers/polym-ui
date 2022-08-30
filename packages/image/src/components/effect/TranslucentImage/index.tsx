import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactElement,
} from 'react'
import { Image } from '../../core'
import { CharacterProps, defaultProps } from './model/props'
import { Mask } from './styled'

export type TranslucentImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type TranslucentImageComponent = (
  props: TranslucentImageProps
) => ReactElement | null

const TranslucentImageInner: TranslucentImageComponent = (
  { ..._props }: TranslucentImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  const { trigger, duration, ...attrs } = props
  return (
    <Mask {...props}>
      <Image {...attrs} ref={ref} />
    </Mask>
  )
}

export const TranslucentImage = forwardRef(TranslucentImageInner)
