import { ComponentStory } from '@storybook/react'
import { WithSidebar } from '..'
import { commmonArgTypes } from '../../../../common/argTypes'
import { Container, Sidebar, MainContents } from '../../../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/WithSidebar',
  component: WithSidebar,
  parameters: {
    docs: {
      page: () => <DocsPage />,
      description: {
        component:
          'Suitable solution to achieve a responsive layout with a sidebar on one side',
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
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

const Template: ComponentStory<typeof WithSidebar> = ({
  children,
  ...args
}) => (
  <WithSidebar {...args} as={Container}>
    <Sidebar />
    <MainContents />
  </WithSidebar>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
