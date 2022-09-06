import { ComponentStory } from '@storybook/react'
import { Button } from '../../core'
import { defaultButtonCharacterProps } from '../../model/button'
import { defaultFlowGradientStyleProps } from '../../model/style'
import { flowGradientStyleArgTypes } from '../styleArgTypes'
import { buttonArgTypes } from './argTypes'

export default {
  title: 'button/FlowGradient',
  component: Button.FlowGradient,
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
    ...flowGradientStyleArgTypes,
  },
}

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button.FlowGradient {...args}>{children}</Button.FlowGradient>
)

export const flowGradient = Template.bind({})
flowGradient.args = {
  ...defaultButtonCharacterProps,
  ...defaultFlowGradientStyleProps,
  children: 'Liquid',
}
