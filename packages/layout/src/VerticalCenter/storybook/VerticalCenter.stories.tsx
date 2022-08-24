import { ComponentStory } from '@storybook/react'
import { VerticalCenter } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/VerticalCenter',
  component: VerticalCenter,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component: 'Suitable solution for centering elements vertically',
      },
    },
  },
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
    ...logicArgTypes,
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof VerticalCenter> = ({
  children,
  ...args
}) => (
  <VerticalCenter {...args} as={DarkTextBox}>
    {children}
  </VerticalCenter>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Fade!!',
}
playground.argTypes = {}
