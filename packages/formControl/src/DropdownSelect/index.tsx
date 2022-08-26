import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { SelectComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { Root, Select } from './styled'

export type DropdownSelectProps = SelectComponentPropWithRef<CharacterProps>

export type DropdownSelectComponent = (
  props: DropdownSelectProps
) => ReactElement | null

export const DropdownSelect: DropdownSelectComponent = forwardRef(
  (
    { children, ..._props }: DropdownSelectProps,
    ref?: PolymorphicRef<'select'>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <Root>
        <Select {...props} ref={ref}>
          <option value=''>Please choose</option>
          {[...new Array(5)].map((_, idx) => (
            <option key={idx} value={idx + 1}>
              choices{idx + 1}
            </option>
          ))}
        </Select>
      </Root>
    )
  }
)
