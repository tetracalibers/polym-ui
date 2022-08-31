import { CssStyle } from 'ts-typedef-helper'
import { defaultProps } from './props'

export const logicArgTypes = {
  limit: {
    control: {
      type: 'number',
    },
    description:
      'Maximum number of items that can be lined up in a horizontal layout',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.limit,
        details: null,
      },
    },
  },
  spaceV: {
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the spacing of elements horizontally aligned',
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
  breakpointV: {
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the breakpoints that switch from horizontal to vertical alignment',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.breakpointV,
        details: null,
      },
    },
  },
  breakpointU: {
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
        summary: defaultProps.breakpointU,
        details: null,
      },
    },
  },
}
