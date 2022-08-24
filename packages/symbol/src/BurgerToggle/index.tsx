import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledButton, SymbolWrapper, Line1, Line2, Line3 } from './styled'
import { VerticalStack } from '@polym-ui/layout'

export type BurgerToggleProps<As extends ElementType> = Omit<
  PolymorphicComponentPropWithRef<As, CharacterProps>,
  'children'
>

export type BurgerToggleComponent = <As extends ElementType>(
  props: BurgerToggleProps<As>
) => ReactElement | null

export const BurgerToggle: BurgerToggleComponent = forwardRef(
  <As extends ElementType>(
    { as, ..._props }: BurgerToggleProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledButton {...props} ref={ref} as={as as unknown as undefined}>
        <VerticalStack {...props} as={SymbolWrapper} space={'8px'}>
          <Line1 {...props} />
          <Line2 {...props} />
          <Line3 {...props} />
        </VerticalStack>
      </StyledButton>
    )
  }
)
