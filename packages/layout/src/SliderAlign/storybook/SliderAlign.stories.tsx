import { ComponentStory } from '@storybook/react'
import { SliderAlign } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/SliderAlign',
  component: SliderAlign,
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
        type: null,
      },
      description: 'Elements you want to put side by side in a slider format',
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

const Template: ComponentStory<typeof SliderAlign> = ({
  children,
  ...args
}) => (
  <SliderAlign {...args} as={DarkTextBox}>
    {children}
  </SliderAlign>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
