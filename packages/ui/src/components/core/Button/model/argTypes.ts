import { buttonTypeOptions, defaultCoreProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const coreArgTypes = {
  type: {
    control: {
      type: 'select',
    },
    options: buttonTypeOptions,
    description:
      'Specify "submit" for form submit button, "reset" for form reset button, and "button" for other buttons',
    table: {
      category: 'html',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultCoreProps.type,
      },
    },
  },
  children: {
    control: {
      type: null,
    },
    description: 'Element to be displayed as a button label. ',
    table: {
      category: 'react',
      type: {
        summary: null,
      },
    },
    type: {
      required: true,
    },
  },
}
