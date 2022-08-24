import { ComponentStory } from '@storybook/react'
import { CharLimitedTextarea } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'
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

const Template: ComponentStory<typeof CharLimitedTextarea> = ({
  children,
  ...args
}) => (
  <CharLimitedTextarea {...args} as={DarkTextBox}>
    {children}
  </CharLimitedTextarea>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Fade!!',
}
playground.argTypes = {}
