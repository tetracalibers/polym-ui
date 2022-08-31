import { defaultProps, sidebarChildOptions } from './props'

export const logicArgTypes = {
  sidebarChild: {
    control: {
      type: 'select',
    },
    options: sidebarChildOptions,
    description:
      'A string indicating which of the two child elements should be considered a sidebar',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.sidebarChild,
        details: null,
      },
    },
  },
  mainMinWidth: {
    control: {
      type: 'number',
    },
    description: 'Minimum width of main content in horizontal arrangement (%)',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.mainMinWidth,
        details: null,
      },
    },
  },
  noStretch: {
    control: {
      type: 'boolean',
    },
    description:
      'Whether the original height of the element should be maintained in vertical placement',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.noStretch,
        details: null,
      },
    },
  },
}
