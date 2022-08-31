import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { CharacterProps, defaultProps } from './model/props'
import { Label, Input, Circle, RadioButton } from './styled'
import { ColorPalette } from 'styled-utility-first'
import { InputComponentPropWithRef } from '../../types/polymorphic/fixedAs'
import { PolymorphicRef } from '../../types/polymorphic/standard'
import { CircleIcon } from '../icon/CircleIcon'
import { OverlapLayer } from '../layout-algorithm/OverlapLayer'
import { WithIcon } from '../with-icon/core'

export type RadioProps = Omit<InputComponentPropWithRef<CharacterProps>, 'type'>

export type RadioComponent = (props: RadioProps) => ReactElement | null

export const Radio: RadioComponent = forwardRef(
  ({ children, ..._props }: RadioProps, ref?: PolymorphicRef<'input'>) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    const { disabled, checkIconColor, ...rest } = props
    return (
      <Label disabled={disabled}>
        <Input {...rest} ref={ref} type='radio' disabled={disabled} />
        <WithIcon alignItems={'center'} spaceV={0.25} spaceU={'em'}>
          <OverlapLayer
            renderOverlay={() => (
              <CircleIcon sizeV={0.8} sizeU={'em'} color={checkIconColor} />
            )}
            as={RadioButton}
          >
            <Circle {...rest} />
          </OverlapLayer>
          {children}
        </WithIcon>
      </Label>
    )
  }
)
