import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  sizeV: {
    control: {
      type: 'number',
    },
    description: 'Numeric value representing the diameter of a circle',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.sizeV,
        details: null,
      },
    },
  },
  sizeU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of sizeV',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.sizeU,
        details: null,
      },
    },
  },
}
