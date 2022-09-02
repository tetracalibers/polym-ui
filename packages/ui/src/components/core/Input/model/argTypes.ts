import { defaultNumberInputProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const coreArgTypes = {}

/* -------------------------------------------- */

export const numberArgTypes = {
  ...coreArgTypes,
  stepper: {
    control: {
      type: 'boolean',
    },
    description:
      'If set to true, it improves the ease of use of the stepper to increase or decrease numbers.',
    table: {
      category: 'feature',
      type: {
        summary: 'null',
      },
      defaultValue: {
        summary: defaultNumberInputProps.stepper,
      },
    },
  },
}
