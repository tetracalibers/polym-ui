import { ComponentStory } from '@storybook/react'
import CollapsingClick, { defaultProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'

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
    ...commmonArgTypes,
    ...styleArgTypes,
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
}
playground.argTypes = {}
