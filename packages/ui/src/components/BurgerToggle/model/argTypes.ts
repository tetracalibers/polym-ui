import { defaultProps, designOptions } from './props'

export const logicArgTypes = {
  design: {
    control: {
      type: 'select',
    },
    options: designOptions,
    description: 'Choose from a variety of designs',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.design,
        details: null,
      },
    },
  },
}
