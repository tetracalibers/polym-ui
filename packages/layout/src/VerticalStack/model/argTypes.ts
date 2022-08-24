import { defaultProps } from './props'

export const logicArgTypes = {
  recursive: {
    control: {
      type: 'boolean',
    },
    description: 'Whether to apply layout to nested elements',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.recursive,
        details: null,
      },
    },
  },
  separateFrom: {
    control: {
      type: 'number',
    },
    description: 'Separator to group elements up and down',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.separateFrom,
        details: null,
      },
    },
  },
}
