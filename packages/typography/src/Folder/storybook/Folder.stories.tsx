import { ComponentStory } from '@storybook/react'
import { Folder } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'typography/Folder',
  component: Folder,
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
      description:
        'Text or text component you want to display next to the icon as the folder name',
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

const Template: ComponentStory<typeof Folder> = ({ children, ...args }) => (
  <Folder {...args}>{children}</Folder>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'packages',
}
