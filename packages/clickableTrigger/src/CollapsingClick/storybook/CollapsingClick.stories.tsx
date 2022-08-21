import { ComponentStory } from '@storybook/react'
import CollapsingClick, { defaultProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { pushToOptions } from '../model/props'

export default {
  title: 'Button&Link/CollapsingClick',
  component: CollapsingClick,
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
    pushTo: {
      control: {
        type: null,
      },
      description: 'Direction of push in hover',
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

const Template: ComponentStory<typeof CollapsingClick> = ({
  children,
  ...args
}) => <CollapsingClick {...args}>{children}</CollapsingClick>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Press!!',
  pushTo: 'bottom',
}
playground.argTypes = {
  pushTo: {
    control: {
      type: 'radio',
    },
    options: pushToOptions,
  },
}
