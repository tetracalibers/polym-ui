import _ from 'lodash'
import { ElementType, ReactElement } from 'react'
import { AnyStyledComponent } from 'styled-components'
import { PolymorphicComponentProp } from '../common/polymorphic'
import { CharacterProps, defaultProps } from './model/props'
import {
  getChildrenWrapper,
  WillHorizontalLine,
  WillVerticalLine,
} from './styled'

export type WillBorderProps<As extends ElementType> = PolymorphicComponentProp<
  As,
  CharacterProps
>

export type WillBorderComponent = <As extends ElementType>(
  props: WillBorderProps<As>
) => ReactElement

export const WillBorder: WillBorderComponent = <As extends ElementType>({
  as,
  children,
  ..._props
}: WillBorderProps<As>) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  const { borderColor, animationDuration } = props
  const ChildrenWrapper = getChildrenWrapper<As>(as) as AnyStyledComponent

  return (
    <WillHorizontalLine
      borderColor={borderColor}
      animationDuration={animationDuration}
    >
      <WillVerticalLine
        borderColor={borderColor}
        animationDuration={animationDuration}
      >
        <ChildrenWrapper {...props} animationDuration={animationDuration}>
          {children}
        </ChildrenWrapper>
      </WillVerticalLine>
    </WillHorizontalLine>
  )
}
