import { ComponentStory } from '@storybook/react'
import { Button } from '../../core'
import { defaultButtonCharacterProps } from '../../model/button'
import { defaultGradientStyleProps } from '../../model/style'
import { gradientStyleArgTypes } from '../styleArgTypes'
import { buttonArgTypes } from './argTypes'

export default {
  title: 'button/Gradient',
  component: Button,
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
    ...gradientStyleArgTypes,
  },
}

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button.Gradient {...args}>{children}</Button.Gradient>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultButtonCharacterProps,
  ...defaultGradientStyleProps,
  children: 'Correct Usage',
}
