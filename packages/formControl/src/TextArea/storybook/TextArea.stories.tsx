import { ComponentStory } from '@storybook/react'
import { TextArea } from '..'
import { commmonArgTypes } from '../../common/argTypes'
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
    ...characterArgTypes,
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof TextArea> = ({ children, ...args }) => (
  <TextArea {...args}>{children}</TextArea>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: '',
}
playground.argTypes = {}
