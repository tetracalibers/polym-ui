import { ComponentStory } from '@storybook/react'
import { Text } from '../../../../Text'
import { Button } from '../../core'
import { defaultButtonCharacterProps } from '../../model/button'
import { defaultScaleGradientStyleProps } from '../../model/style'
import { scaleGradientStyleArgTypes } from '../styleArgTypes'
import { buttonArgTypes } from './argTypes'

export default {
  title: 'button/ScaleGradient',
  component: Button.ScaleGradient,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'white',
    },
  },
  argTypes: {
    ...buttonArgTypes,
    ...scaleGradientStyleArgTypes,
  },
}

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button.ScaleGradient {...args}>
    <Text color={'#FFF'}>{children as string}</Text>
  </Button.ScaleGradient>
)

export const scaleGradient = Template.bind({})
scaleGradient.args = {
  ...defaultButtonCharacterProps,
  ...defaultScaleGradientStyleProps,
  children: 'Liquid',
}
