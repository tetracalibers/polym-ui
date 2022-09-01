import { buttonTypeOptions, defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
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
        summary: defaultProps.type,
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
  },
}
