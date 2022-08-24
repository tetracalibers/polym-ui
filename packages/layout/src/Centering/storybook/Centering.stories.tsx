import { ComponentStory } from '@storybook/react'
import { Centering } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'form control/Centering',
  component: Centering,
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
    intrinsic: {
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
          summary: defaultProps.intrinsic,
          details: null,
        },
      },
    },
    ...commmonArgTypes,
    ...styleArgTypes,
  },
}

const Template: ComponentStory<typeof Centering> = ({ children, ...args }) => (
  <Centering {...args} as={DarkTextBox}>
    {children}
  </Centering>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: 'Fade!!',
}
playground.argTypes = {}