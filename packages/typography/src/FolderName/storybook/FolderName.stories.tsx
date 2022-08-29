import { ComponentStory } from '@storybook/react'
import { FolderName } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'typography/FolderName',
  component: FolderName,
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

const Template: ComponentStory<typeof FolderName> = ({ children, ...args }) => (
  <FolderName {...args}>{children}</FolderName>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'packages',
}
