import { ComponentStory } from '@storybook/react'
import { TextArea } from '..'
import { styleArgTypes } from '../css-props/argTypes'
import { characterArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'form control/TextArea',
  component: TextArea,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'Labels to be displayed above the textarea',
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
    ...characterArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof TextArea> = ({ children, ...args }) => (
  <TextArea {...args}>{children}</TextArea>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  name: 'survey',
  children: "Reader's Voice",
}
playground.argTypes = {}
