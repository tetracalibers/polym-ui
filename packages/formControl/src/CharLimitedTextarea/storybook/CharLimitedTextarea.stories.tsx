import { ComponentStory } from '@storybook/react'
import { CharLimitedTextarea, defaultProps } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { characterArgTypes as textareaArgTypes } from '../../TextArea/model/argTypes'
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
    },
    renderCharCountLabel: {
      control: {
        type: null,
      },
      description: 'Component that draws character count results',
      table: {
        type: {
          summary:
            '(currCharCount: number, maxChars: number, minChars: number) => ReactNode',
        },
        category: 'application',
      },
    },
    ...textareaArgTypes,
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof CharLimitedTextarea> = ({
  children,
  ...args
}) => <CharLimitedTextarea {...args}>{children}</CharLimitedTextarea>

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'tweet',
  name: 'content',
}
playground.argTypes = {}
