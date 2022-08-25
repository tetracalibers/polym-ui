import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  widthV: {
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
        summary: '',
        details: null,
      },
    },
  },
  widthU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of widthV',
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
