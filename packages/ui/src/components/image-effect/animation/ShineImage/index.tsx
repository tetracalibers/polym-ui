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

export type ShineImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type ShineImageComponent = (
  props: ShineImageProps
) => ReactElement | null

const ShineImageInner: ShineImageComponent = (
  { ..._props }: ShineImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  // prettier-ignore
  const { duration, ...attrs } = props
  return (
    <Mask {...props}>
      <Image {...attrs} ref={ref} />
    </Mask>
  )
}

export const ShineImage = forwardRef(ShineImageInner)
