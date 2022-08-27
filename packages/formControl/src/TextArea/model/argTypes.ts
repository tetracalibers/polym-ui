import { defaultProps } from './props'

export const characterArgTypes = {
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
    type: {
      required: true,
    },
  },
  id: {
    control: {
      type: 'text',
    },
    description:
      'The id attribute on the HTML textarea element and the for attribute on the label element (If not specified, the value of name props is used.)',
    table: {
      type: {
        summary: null,
      },
      category: 'html',
    },
  },
}
