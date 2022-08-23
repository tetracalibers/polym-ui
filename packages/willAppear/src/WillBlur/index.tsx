import _ from 'lodash'
import { ElementType, ReactElement } from 'react'
import { AnyStyledComponent } from 'styled-components'
import { PolymorphicComponentProp } from '../common/polymorphic'
import { CharacterProps, defaultProps } from './model/props'
import { getStyledElement } from './styled'

export type WillBlurProps<As extends ElementType> = PolymorphicComponentProp<
  As,
  CharacterProps
>

export type WillBlurComponent = <As extends ElementType>(
  props: WillBlurProps<As>
) => ReactElement

export const WillBlur: WillBlurComponent = <As extends ElementType>({
  as,
  children,
  ..._props
}: WillBlurProps<As>) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  const StyledElement = getStyledElement<As>(as) as AnyStyledComponent
  return <StyledElement {...props}>{children}</StyledElement>
}
