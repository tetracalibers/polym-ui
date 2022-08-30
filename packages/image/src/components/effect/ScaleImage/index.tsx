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

export type ScaleImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type ScaleImageComponent = (
  props: ScaleImageProps
) => ReactElement | null

const ScaleImageInner: ScaleImageComponent = (
  { ..._props }: ScaleImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  const { trigger, mode, withRotate, ...attrs } = props
  return (
    <Mask {...props}>
      <Image {...attrs} ref={ref} />
    </Mask>
  )
}

export const ScaleImage = forwardRef(ScaleImageInner)
