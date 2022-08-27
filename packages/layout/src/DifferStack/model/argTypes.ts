import { CssStyle } from 'ts-typedef-helper'
import { defaultProps } from './props'

export const logicArgTypes = {
  spaceV: {
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the Minimum space to be reserved between child elements',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.spaceV,
        details: null,
      },
    },
  },
  spaceU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of spaceV',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.spaceU,
        details: null,
      },
    },
  },
}
