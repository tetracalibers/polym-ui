import { CssStyle } from 'ts-typedef-helper'
import { defaultProps } from './props'

export const logicArgTypes = {
  sizeV: {
    control: {
      type: 'number',
    },
    description: 'Numeric value for heart size',
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
