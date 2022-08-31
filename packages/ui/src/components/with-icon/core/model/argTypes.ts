import { defaultProps, iconChildOptions } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  iconChild: {
    control: {
      type: 'select',
    },
    options: iconChildOptions,
    description:
      'String indicating which of the two child elements is considered the icon',
    table: {
      type: {
        summary: null,
      },
      category: 'character',
      defaultValue: {
        summary: defaultProps.iconChild,
        details: null,
      },
    },
  },
  spaceV: {
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the size of the gap between the icon and the text',
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
