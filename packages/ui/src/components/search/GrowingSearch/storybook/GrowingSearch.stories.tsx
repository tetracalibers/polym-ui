import { ComponentStory } from '@storybook/react'
import { GrowingSearch } from '..'
import { logicArgTypes } from '../model/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'form control/GrowingSearch',
  component: GrowingSearch,
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

const Template: ComponentStory<typeof GrowingSearch> = ({
  children,
  ...args
}) => <GrowingSearch {...args}>{children}</GrowingSearch>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
