import { ComponentStory } from '@storybook/react'
import { HaveSidebar } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { Container, Sidebar, MainContents } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/HaveSidebar',
  component: HaveSidebar,
  parameters: {
    docs: {
      page: () => <DocsPage />,
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

const Template: ComponentStory<typeof HaveSidebar> = ({
  children,
  ...args
}) => (
  <HaveSidebar {...args} as={Container}>
    <Sidebar>Sidebar!!</Sidebar>
    <MainContents>Main!!</MainContents>
  </HaveSidebar>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
