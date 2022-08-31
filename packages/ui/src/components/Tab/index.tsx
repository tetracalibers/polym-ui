import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../types/polymorphic/standard'
import { DummyText500W } from '../../mock/DummyText'
import { CharacterProps, defaultProps } from './model/props'
import { Wrapper } from './styled'

export type TabProps<As extends ElementType> = PolymorphicComponentPropWithRef<
  As,
  CharacterProps
>

export type TabComponent = <As extends ElementType>(
  props: TabProps<As>
) => ReactElement | null

export const Tab: TabComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: TabProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <Wrapper {...props} ref={ref} as={as as unknown as undefined}>
        <ul role='tablist'>
          <li role='presentation'>
            <a
              href='#panel01'
              role='tab'
              aria-controls='panel01'
              aria-selected='true'
              aria-expanded='true'
              id='tab01'
            >
              Tab 1
            </a>
          </li>
          <li role='presentation'>
            <a
              href='#panel02'
              role='tab'
              aria-controls='panel02'
              aria-selected='false'
              aria-expanded='false'
              tabIndex={-1}
              id='tab02'
            >
              Tab 2
            </a>
          </li>
          <li role='presentation'>
            <a
              href='#panel03'
              role='tab'
              aria-controls='panel03'
              aria-selected='false'
              aria-expanded='false'
              tabIndex={-1}
              id='tab03'
            >
              Tab 3
            </a>
          </li>
        </ul>
        <div
          id='panel01'
          aria-labelledby='tab01'
          role='tabpanel'
          aria-hidden='false'
        >
          <h2 tabIndex={0}>Panel 1</h2>
          <DummyText500W />
        </div>
        <div
          id='panel02'
          aria-labelledby='tab02'
          role='tabpanel'
          aria-hidden='true'
        >
          <h2 tabIndex={0}>Panel 2</h2>
          <DummyText500W />
        </div>
        <div
          id='panel03'
          aria-labelledby='tab03'
          role='tabpanel'
          aria-hidden='true'
        >
          <h2 tabIndex={0}>Panel 3</h2>
          <DummyText500W />
        </div>
      </Wrapper>
    )
  }
)
