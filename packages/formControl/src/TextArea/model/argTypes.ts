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
}
