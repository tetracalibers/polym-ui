import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { DummyText500W } from '../mock/DummyText'
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
        <ul>
          <li>
            <a>Tab 1</a>
          </li>
          <li>
            <a>Tab 2</a>
          </li>
          <li>
            <a>Tab 3</a>
          </li>
        </ul>
        <div>
          <DummyText500W />
        </div>
        <div>
          <DummyText500W />
        </div>
        <div>
          <DummyText500W />
        </div>
      </Wrapper>
    )
  }
)
