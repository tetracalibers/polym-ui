import { defaultProps } from './props'

export const logicArgTypes = {
  limit: {
    control: {
      type: 'number',
    },
    description:
      'Maximum number of items that can be lined up in a horizontal layout',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.limit,
        details: null,
      },
    },
  },
}
