import { ComponentStory } from '@storybook/react'
import { GenericInput } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps, typeOptions } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'form control/GenericInput',
  component: GenericInput,
  parameters: {
    docs: {
      page: () => <DocsPage />,
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: typeOptions,
      description: 'HTML input element type attribute',
      table: {
        type: {
          summary: null,
        },
        category: 'application',
        defaultValue: {
          summary: defaultProps.type,
          details: null,
        },
      },
      type: {
        required: true,
      },
    },
    id: {
      control: {
        type: 'text',
      },
      description: 'HTML input element id attribute',
      table: {
        type: {
          summary: null,
        },
        category: 'application',
        defaultValue: {
          summary: defaultProps.id,
          details: null,
        },
      },
      type: {
        required: true,
      },
    },
    label: {
      control: {
        type: 'text',
      },
      description:
        'A string of text that appears near the input field as a label indicating what should be entered',
      table: {
        type: {
          summary: null,
        },
        category: 'application',
        defaultValue: {
          summary: defaultProps.label,
          details: null,
        },
      },
      type: {
        required: true,
      },
    },
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof GenericInput> = ({ ...args }) => (
  <GenericInput {...args} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
