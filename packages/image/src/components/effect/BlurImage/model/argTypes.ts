import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  blurRadius: {
    control: {
      type: 'number',
    },
    description: 'radius of blur (px)',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'blur',
      defaultValue: {
        summary: defaultProps.blurRadius,
        details: null,
      },
    },
  },
}
