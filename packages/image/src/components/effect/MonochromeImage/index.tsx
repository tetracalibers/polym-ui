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

export type MonochromeImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type MonochromeImageComponent = (
  props: MonochromeImageProps
) => ReactElement | null

const MonochromeImageInner: MonochromeImageComponent = (
  { ..._props }: MonochromeImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  // prettier-ignore
  const { trigger, duration, ...attrs } = props
  return (
    <Mask {...props}>
      <Image {...attrs} ref={ref} />
    </Mask>
  )
}

export const MonochromeImage = forwardRef(MonochromeImageInner)
