import { ComponentStory } from '@storybook/react'
import { Radio } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'form control/Radio',
  component: Radio,
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
      description: 'Label string displayed to the right of the radio button',
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
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof Radio> = ({ children, ...args }) => (
  <Radio {...args}>{children}</Radio>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'female',
}
playground.argTypes = {}
