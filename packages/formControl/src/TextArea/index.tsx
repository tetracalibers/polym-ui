import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import { TextAreaComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type TextAreaProps = TextAreaComponentPropWithRef<CharacterProps>

export type TextAreaComponent = (props: TextAreaProps) => ReactElement | null

export const TextArea: TextAreaComponent = forwardRef(
  <As extends ElementType>(
    { children, ..._props }: TextAreaProps,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledElement {...props} ref={ref}>
        {children}
      </StyledElement>
    )
  }
)
