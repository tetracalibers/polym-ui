import { ComponentStory } from '@storybook/react'
import { TextArea } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'form control/TextArea',
  component: TextArea,
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

const Template: ComponentStory<typeof TextArea> = ({ children, ...args }) => (
  <TextArea {...args} as={DarkTextBox}>
    {children}
  </TextArea>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Fade!!',
}
playground.argTypes = {}
