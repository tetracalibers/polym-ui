import { defaultProps, modeOptions } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  mode: {
    control: {
      type: 'radio',
    },
    options: modeOptions,
    description: 'Expanding or shrinking',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      defaultValue: {
        summary: defaultProps.mode,
        details: null,
      },
    },
  },
  withRotate: {
    control: {
      type: 'boolean',
    },
    description: 'Whether to rotate at the same time as scaling',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      defaultValue: {
        summary: defaultProps.withRotate,
        details: null,
      },
    },
  },
}
