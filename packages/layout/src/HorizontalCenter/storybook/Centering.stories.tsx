import { ComponentStory } from '@storybook/react'
import { HorizontalCenter } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'form control/HorizontalCenter',
  component: HorizontalCenter,
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
    textCenter: {
      control: {
        type: 'boolean',
      },
      description: 'Whether text is also centered or not',
      table: {
        type: {
          summary: null,
        },
        category: 'style control',
        defaultValue: {
          summary: defaultProps.textCenter,
          details: null,
        },
      },
    },
    byContentWidth: {
      control: {
        type: 'boolean',
      },
      description:
        'Whether to center child elements based on their content width',
      table: {
        type: {
          summary: null,
        },
        category: 'style control',
        defaultValue: {
          summary: defaultProps.byContentWidth,
          details: null,
        },
      },
    },
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof HorizontalCenter> = ({
  children,
  ...args
}) => (
  <HorizontalCenter {...args} as={DarkTextBox}>
    {children}
  </HorizontalCenter>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Fade!!',
}
playground.argTypes = {}
