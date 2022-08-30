import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  sizeV: {
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the length of the long side of the check mark',
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
  thickness: {
    control: {
      type: 'number',
    },
    description: 'line thickness (px)',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.thickness,
        details: null,
      },
    },
  },
}