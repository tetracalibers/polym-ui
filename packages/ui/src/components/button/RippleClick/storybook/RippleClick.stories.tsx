import { ComponentStory } from '@storybook/react'
import RippleClick, { defaultProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'

export default {
  title: 'Button&Link/RippleClick',
  component: RippleClick,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'label',
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

const Template: ComponentStory<typeof RippleClick> = ({ ...args }) => (
  <RippleClick {...args} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Click!',
  as: 'button',
}
