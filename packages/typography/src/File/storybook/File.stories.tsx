import { ComponentStory } from '@storybook/react'
import { File } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'typography/File',
  component: File,
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
        'Text or text component you want to display next to the icon as the file name',
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

const Template: ComponentStory<typeof File> = ({ children, ...args }) => (
  <File {...args}>{children}</File>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'script.js',
}
