import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { InputComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { ClickArea, Root, SearchInput } from './styled'
import { BiSearchAlt } from 'react-icons/bi'
import { OverlapLayer } from '@polym-ui/layout'
import { WithIcon } from '@polym-ui/typography'

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
      <Root role='search'>
        <form>
          <OverlapLayer
            renderOverlay={() => <BiSearchAlt size={40} />}
            as={ClickArea}
          >
            <SearchInput {...props} ref={ref} type='search' />
          </OverlapLayer>
        </form>
      </Root>
    )
  }
)
