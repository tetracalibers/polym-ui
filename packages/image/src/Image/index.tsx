import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

const allowHtmlTag = ['img', 'picture'] as const
type AllowHtmlTag = typeof allowHtmlTag[number]

export type ImageProps<As extends AllowHtmlTag> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type ImageComponent = <As extends AllowHtmlTag>(
  props: ImageProps<As>
) => ReactElement | null

export const Image: ImageComponent = forwardRef(
  <As extends AllowHtmlTag>(
    { as, children, ..._props }: ImageProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledElement {...props} ref={ref} as={as as unknown as undefined}>
        {children}
      </StyledElement>
    )
  }
)
