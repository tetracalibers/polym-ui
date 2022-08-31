import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  disabled: {
    control: {
      type: 'boolean',
    },
    description: 'Whether to disable the radio button',
    table: {
      type: {
        summary: null,
      },
      category: 'html',
      defaultValue: {
        summary: defaultProps.disabled,
        details: null,
      },
    },
  },
}
