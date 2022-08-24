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
        summary: '',
        details: null,
      },
    },
  },
}
