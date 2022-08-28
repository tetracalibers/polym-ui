import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { InputComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledInput, StyledLabel, Square, IconWrapper } from './styled'
import { CheckIcon } from '@polym-ui/symbol'
import { WithIcon } from '@polym-ui/typography'
import { OverlapLayer } from '@polym-ui/layout'

export type CheckboxProps = Omit<
  InputComponentPropWithRef<CharacterProps>,
  'type'
>

export type CheckboxComponent = (props: CheckboxProps) => ReactElement | null

export const Checkbox: CheckboxComponent = forwardRef(
  ({ children, ..._props }: CheckboxProps, ref?: PolymorphicRef<'input'>) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    const { name, value, disabled, checkIconColor } = props
    return (
      <StyledLabel disabled={disabled}>
        <StyledInput
          {...props}
          disabled={disabled}
          ref={ref}
          type='checkbox'
          name={name}
          value={value}
        />
        <WithIcon alignItems={'center'}>
          <OverlapLayer
            renderOverlay={() => (
              <IconWrapper>
                <CheckIcon
                  sizeV={1.5}
                  sizeU={'em'}
                  thickness={3}
                  color={checkIconColor}
                />
              </IconWrapper>
            )}
            contain={false}
            fixed={false}
          >
            <Square {...props} />
          </OverlapLayer>
          {children}
        </WithIcon>
      </StyledLabel>
    )
  }
)