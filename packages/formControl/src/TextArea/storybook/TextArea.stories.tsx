import { ComponentStory } from '@storybook/react'
import { TextArea } from '..'
import { commmonArgTypes } from '../../common/argTypes'
import { styleArgTypes } from '../css-props/argTypes'
import { defaultProps } from '../model/props'

export default {
  title: 'form control/atom/TextArea',
  component: TextArea,
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
    minRows: {
      control: {
        type: 'number',
      },
      description: 'Minimum number of lines in textarea',
      table: {
        type: {
          summary: null,
        },
        category: 'application',
        defaultValue: {
          summary: defaultProps.minRows,
          details: null,
        },
      },
      type: {
        required: true,
      },
    },
    maxRows: {
      control: {
        type: 'number',
      },
      description: 'Maximum number of lines in textarea',
      table: {
        type: {
          summary: null,
        },
        category: 'application',
        defaultValue: {
          summary: defaultProps.maxRows,
          details: null,
        },
      },
      type: {
        required: true,
      },
    },
    hasError: {
      control: {
        type: 'boolean',
      },
      description: 'Set to true if there is a validation error',
      table: {
        type: {
          summary: null,
        },
        category: 'application',
        defaultValue: {
          summary: defaultProps.hasError,
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

const Template: ComponentStory<typeof TextArea> = ({ children, ...args }) => (
  <TextArea {...args}>{children}</TextArea>
)

export const playground = Template.bind({})
playground.args = {
  ...defaultProps,
  children: '',
}
playground.argTypes = {}
