import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  grayScale: {
    control: {
      type: 'number',
    },
    description: 'degree of monochrome (%)',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'monochrome',
      defaultValue: {
        summary: defaultProps.grayScale,
        details: null,
      },
    },
  },
}
