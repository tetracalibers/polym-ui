import { ComponentStory } from '@storybook/react'
import RippleButton from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'Button/RippleButton',
  component: RippleButton,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'Label of button',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
      },
      type: {
        required: true,
      },
    },
    ...styleArgTypes,
    ...commmonArgTypes,
  },
}

const Template: ComponentStory<typeof RippleButton> = ({ ...args }) => (
  <RippleButton {...args} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Click!',
}
