import { ComponentStory } from '@storybook/react'
import { HorizontalCenter } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { DarkTextBox, FillBox } from '../../mock/TestBox'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'
import { DocsPage } from './docsPage'

export default {
  title: 'layout/HorizontalCenter',
  component: HorizontalCenter,
  parameters: {
    docs: {
      page: () => <DocsPage />,
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Elements to be placed in the center',
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
  <HorizontalCenter {...args}>
    <FillBox>Center!!</FillBox>
  </HorizontalCenter>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
}
playground.argTypes = {}
