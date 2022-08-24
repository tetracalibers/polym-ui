import { ComponentStory } from '@storybook/react'
import { CharLimitedTextarea, defaultProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { DocsPage } from './docsPage'

export default {
  title: 'form control/CharLimitedTextarea',
  component: CharLimitedTextarea,
  parameters: {
    docs: {
      page: () => <DocsPage />,
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
    maxChars: {
      control: {
        type: 'number',
      },
      description:
        'Maximum number of characters that can be entered. If a negative number is specified, it is unlimited.',
      table: {
        type: {
          summary: null,
        },
        category: 'application',
        defaultValue: {
          summary: defaultProps.maxChars,
          details: null,
        },
      },
      type: {
        required: true,
      },
    },
    minChars: {
      control: {
        type: 'number',
      },
      description:
        'Minimum number of characters that must be entered. If a negative number is specified, it is unlimited.',
      table: {
        type: {
          summary: null,
        },
        category: 'application',
        defaultValue: {
          summary: defaultProps.minChars,
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

const Template: ComponentStory<typeof CharLimitedTextarea> = ({ ...args }) => (
  <CharLimitedTextarea {...args} />
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
