import _ from 'lodash'
import { ChangeEvent, forwardRef, ReactElement, useRef, useState } from 'react'
import { InputComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { ClickArea, Root, SearchInput } from './styled'
import { BiSearchAlt } from 'react-icons/bi'
import { OverlapLayer } from '@polym-ui/layout'
import { WithIcon } from '@polym-ui/typography'
import { useInput } from '../hooks/useInput'

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

    const [searchQuery, setSearchQuery] = useState('')
    const onTyping = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value)
    }

    const rootEref = useRef(null)
    const clickAreaEref = useRef(null)

    return (
      <Root role='search' ref={rootEref}>
        <form>
          <OverlapLayer
            renderOverlay={() => <BiSearchAlt size={40} />}
            as={ClickArea}
            ref={clickAreaEref}
          >
            <SearchInput {...props} ref={ref} type='search' />
          </OverlapLayer>
        </form>
      </Root>
    )
  }
)
