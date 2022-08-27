import _ from 'lodash'
import { ChangeEvent, forwardRef, ReactElement, useRef, useState } from 'react'
import { InputComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { ClickArea, ResetButton, Root, SearchInput } from './styled'
import { BiSearchAlt } from 'react-icons/bi'
import { RiCloseCircleLine } from 'react-icons/ri'
import { OverlapLayer, DifferStack } from '@polym-ui/layout'
import { WithIcon } from '@polym-ui/typography'
import { useInput } from '../hooks/useInput'
import { useUnFocus } from '../hooks/useUnFocus'

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

    const [searchQuery, onTyping] = useInput('')

    const rootEref = useRef<HTMLDivElement>(null)
    const clickAreaEref = useRef<HTMLLabelElement>(null)

    const onUnFocus = () => {
      // 入力中はフォーカスアウトしても元の長さに戻らないようにする
      if (searchQuery.length > 0) {
        // 再度focus
        clickAreaEref.current?.focus()
      }
    }
    return (
      <Root role='search' ref={rootEref}>
        <form>
          <DifferStack>
            <OverlapLayer
              renderOverlay={() => <BiSearchAlt size={40} />}
              as={ClickArea}
              ref={clickAreaEref}
              onBlur={onUnFocus}
            >
              <SearchInput
                {...props}
                ref={ref}
                type='search'
                onChange={onTyping}
                onBlur={onUnFocus}
              />
            </OverlapLayer>
            <ResetButton type='reset'>
              <RiCloseCircleLine size={30} />
            </ResetButton>
          </DifferStack>
        </form>
      </Root>
    )
  }
)
