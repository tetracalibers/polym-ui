import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  fixed: {
    control: {
      type: 'boolean',
    },
    description:
      'Whether to fix to the center of the screen and follow scrolling or not',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.fixed,
        details: null,
      },
    },
  },
  contain: {
    control: {
      type: 'boolean',
    },
    description:
      'Whether to guarantee that the layer above will not extend beyond the area of the layer below',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.contain,
        details: null,
      },
    },
  },
  marginValue: {
    control: {
      type: 'number',
    },
    description:
      'A number indicating the minimum margin between the four edges of the lower layer and the four edges of the upper layer',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.marginValue,
        details: null,
      },
    },
  },
  marginUnit: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Unit of the number specified by marginValue',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.marginUnit,
        details: null,
      },
    },
  },
}
