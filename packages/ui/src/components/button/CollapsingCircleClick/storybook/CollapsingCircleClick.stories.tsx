import { ComponentStory } from '@storybook/react'
import CollapsingCircleClick, { defaultProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'

export default {
  title: 'Button&Link/CollapsingCircleClick',
  component: CollapsingCircleClick,
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
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof CollapsingCircleClick> = ({
  children,
  ...args
}) => <CollapsingCircleClick {...args}>{children}</CollapsingCircleClick>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Press!!',
}
