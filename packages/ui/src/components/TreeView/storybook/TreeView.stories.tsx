import { ComponentStory } from '@storybook/react'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'
import { Tree } from '../../../../lib/bundle.es'
import { mockData } from '../mock/data'

export default {
  title: 'hide-and-seek/TreeView',
  component: Tree,
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

const Template: ComponentStory<typeof Tree> = () => <Tree root={mockData} />

export const sample = Template.bind({})
sample.args = {
  ...defaultProps,
}
