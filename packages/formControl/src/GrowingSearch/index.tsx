import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { InputComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledInput } from './styled'

export type GrowingSearchProps = Omit<
  InputComponentPropWithRef<CharacterProps>,
  'type'
>

export type GrowingSearchComponent = (
  props: GrowingSearchProps
) => ReactElement | null

export const GrowingSearch: GrowingSearchComponent = forwardRef(
  (
    { children, ..._props }: GrowingSearchProps,
    ref?: PolymorphicRef<'input'>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledInput {...props} ref={ref} type='search'>
        {children}
      </StyledInput>
    )
  }
)
