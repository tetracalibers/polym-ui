import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  spaceV: {
    control: {
      type: 'number',
    },
    description:
      'Numerical value indicating the size of the gap between each item',
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
  hideScrollBar: {
    control: {
      type: 'boolean',
    },
    description: 'Whether to hide scrollbars',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.hideScrollBar,
        details: null,
      },
    },
  },
}
