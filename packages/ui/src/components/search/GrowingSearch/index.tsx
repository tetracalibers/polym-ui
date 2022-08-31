import _ from 'lodash'
import { forwardRef, ReactElement, useRef, useState } from 'react'
import { CharacterProps, defaultProps } from './model/props'
import {
  ClickArea,
  ResetButton,
  Root,
  SearchInput,
  InputWrapper,
} from './styled'
import { BiSearchAlt } from 'react-icons/bi'
import { RiCloseCircleLine } from 'react-icons/ri'
import { OverlapLayer } from '@polym-ui/layout'
import { useInput } from '@polym/hooks'
import { InputComponentPropWithRef } from '../../../types/polymorphic/fixedAs'
import { PolymorphicRef } from '../../../types/polymorphic/standard'

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

    const clickAreaEref = useRef<HTMLLabelElement>(null)

    const [isOpen, setOpenStatus] = useState(false)

    const open = () => setOpenStatus(true)

    const onUnFocus = () => {
      // 入力中はフォーカスアウトしても元の長さに戻らないようにする
      if (searchQuery.length > 0) {
        return
      }
      setOpenStatus(false)
    }

    const clear = () => {
      onTyping('')
      clickAreaEref.current?.focus()
    }

    return (
      <Root role='search'>
        <form>
          <InputWrapper className={isOpen ? 'open' : ''}>
            <OverlapLayer
              renderOverlay={() => <BiSearchAlt size={40} />}
              as={ClickArea}
              ref={clickAreaEref}
              onBlur={onUnFocus}
              aria-haspopup={!isOpen}
              aria-expanded={isOpen}
              onFocus={open}
            >
              <SearchInput
                {...props}
                ref={ref}
                type='search'
                onChange={onTyping}
                onBlur={onUnFocus}
                onFocus={open}
              />
            </OverlapLayer>
            {isOpen && (
              <ResetButton
                type='reset'
                onClick={clear}
                className={searchQuery.trim().length === 0 ? 'disabled' : ''}
              >
                <RiCloseCircleLine size={25} />
              </ResetButton>
            )}
          </InputWrapper>
        </form>
      </Root>
    )
  }
)
