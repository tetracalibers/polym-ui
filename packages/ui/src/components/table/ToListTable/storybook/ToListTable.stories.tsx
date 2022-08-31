import { ComponentStory } from '@storybook/react'
import { ToListTable } from '..'
import { DarkTextBox } from '../../mock/TestBox'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'table/ToListTable',
  component: ToListTable,
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
  },
}

const Template: ComponentStory<typeof ToListTable> = ({
  children,
  ...args
}) => <ToListTable {...args}>{children}</ToListTable>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
