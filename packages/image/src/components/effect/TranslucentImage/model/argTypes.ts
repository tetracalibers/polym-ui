import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  opacity: {
    control: {
      type: 'number',
    },
    description:
      '1 for no transparency, 0 for transparency, and transparency between the two.',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'translucent',
      defaultValue: {
        summary: defaultProps.opacity,
        details: null,
      },
    },
  },
}
