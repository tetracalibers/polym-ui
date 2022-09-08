import { appearFromOptions, defaultAsFromProps } from '../model/props'

export const asFromArgTypes = {
  appearFrom: {
    control: {
      type: 'radio',
    },
    options: appearFromOptions,
    description: '',
    table: {
      category: 'effect',
      defaultValue: {
        summary: defaultAsFromProps.appearFrom,
        detail: null,
      },
    },
  },
  startHeight: {
    control: {
      type: 'number',
    },
    description: '',
    table: {
      category: 'feature',
      subcategory: 'scroll',
      defaultValue: {
        summary: defaultAsFromProps.startHeight,
        detail: null,
      },
      type: {
        summary: 'number (px)',
      },
    },
  },
}
