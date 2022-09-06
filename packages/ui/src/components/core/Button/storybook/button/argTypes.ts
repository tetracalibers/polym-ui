import { CssStyle } from 'ts-typedef-helper'
import { buttonTypeOptions, defaultButtonCoreProps } from '../../model/props'

export const buttonArgTypes = {
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
        summary: defaultButtonCoreProps.type,
      },
    },
  },
  children: {
    control: {
      type: 'text',
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
