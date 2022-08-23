import { ComponentStory } from '@storybook/react'
import { BlowingTag } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'will appear/BlowingTag',
  component: BlowingTag,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'Child elements of the element specified by as props',
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
    fadeFrom: {
      control: {
        type: null,
      },
      description: 'Which direction the elements appear from',
      table: {
        type: {
          summary: null,
        },
        category: 'character',
        defaultValue: {
          summary: '', // TODO
          details: null,
        },
      },
      type: {
        required: true,
      },
    },
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof BlowingTag> = ({ children, ...args }) => (
  <BlowingTag {...args} as={DarkTextBox}>
    {children}
  </BlowingTag>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Fade!!',
}
playground.argTypes = {}
