import { CssStyle } from 'ts-typedef-helper'
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
        summary: defaultProps.recursive,
        details: null,
      },
    },
    type: {
      required: false,
    },
  },
  separateFrom: {
    control: {
      type: 'number',
    },
    description: 'Separator to group elements up and down',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.separateFrom,
        details: null,
      },
    },
    type: {
      required: false,
    },
  },
  spaceV: {
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the spacing of elements in a vertical line',
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
