import { ComponentStory } from '@storybook/react'
import { Checkbox } from '..'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'form control/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'Label to be displayed next to the checkbox',
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
    ...logicArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof Checkbox> = ({ children, ...args }) => (
  <Checkbox {...args}>{children}</Checkbox>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'I agree.',
}
playground.argTypes = {}
