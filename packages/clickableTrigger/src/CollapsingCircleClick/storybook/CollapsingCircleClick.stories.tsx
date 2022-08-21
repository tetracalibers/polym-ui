import { ComponentStory } from '@storybook/react'
import CollapsingCircleClick, { defaultProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'

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
  },
}

const Template: ComponentStory<typeof CollapsingCircleClick> = ({
  children,
  ...args
}) => <CollapsingCircleClick {...args}>{children}</CollapsingCircleClick>

export const exapmle = Template.bind({})
exapmle.args = {
  ...defaultProps,
  children: 'Press!!',
}
