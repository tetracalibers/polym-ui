import { ComponentStory } from '@storybook/react'
import { Button } from '../../core'
import { defaultButtonCharacterProps } from '../../model/button'

export default {
  title: 'botton/Gradient',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
}

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button.Gradient {...args}>{children}</Button.Gradient>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultButtonCharacterProps,
  children: 'Correct Usage',
}
