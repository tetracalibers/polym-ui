import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { InputComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { Label, Input } from './styled'
import { WithIcon } from '@polym-ui/typography'
import { CircleIcon } from '@polym-ui/symbol'
import { OverlapLayer } from '@polym-ui/layout'
import { ColorPalette } from 'styled-utility-first'

export type RadioProps = Omit<InputComponentPropWithRef<CharacterProps>, 'type'>

export type RadioComponent = (props: RadioProps) => ReactElement | null

// #FF7043 ... DeepOrange400
// #B0BEC5 ... BlueGrey200

export const Radio: RadioComponent = forwardRef(
  ({ children, ..._props }: RadioProps, ref?: PolymorphicRef<'input'>) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    const { disabled, ...rest } = props
    return (
      <Label disabled={disabled}>
        <Input {...rest} ref={ref} type='radio' />
        <WithIcon alignItems={'center'} spaceV={0.25} spaceU={'em'}>
          <OverlapLayer
            renderOverlay={() => (
              <CircleIcon sizeV={0.8} sizeU={'em'} color={'#FF7043'} />
            )}
          >
            <CircleIcon
              sizeV={1.25}
              sizeU={'em'}
              color='#fff'
              borderWidth={1}
              borderColor={'#B0BEC5'}
            />
          </OverlapLayer>
          {children}
        </WithIcon>
      </Label>
    )
  }
)
