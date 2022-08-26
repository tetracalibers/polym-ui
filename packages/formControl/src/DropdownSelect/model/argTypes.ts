import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  choices: {
    control: {
      type: 'object',
    },
    description: 'Drop-down menu choices',
    table: {
      type: {
        summary: '{ value: string | number, label?: string }',
      },
      category: 'application',
      defaultValue: {
        summary: '[]',
        details: null,
      },
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
  },
  onSelect: {
    control: {
      type: null,
    },
    description: 'Event handler when selected',
    table: {
      type: {
        summary: '(selected?) => void',
      },
      category: 'application',
      defaultValue: {
        summary: '() => {}',
        details: null,
      },
    },
  },
  name: {
    control: {
      type: 'text',
    },
    description: 'name attribute set to the HTML select element',
    table: {
      type: {
        summary: null,
      },
      category: 'html',
      defaultValue: {
        summary: defaultProps.name,
        details: null,
      },
    },
  },
  initialValue: {
    control: {
      type: 'text',
    },
    description: 'Value to be kept in the selected state from the beginning.',
    table: {
      type: {
        summary: null,
      },
      category: 'html',
      defaultValue: {
        summary: defaultProps.initialValue,
        details: null,
      },
    },
  },
}
