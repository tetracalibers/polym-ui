import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  href: {
    control: {
      type: 'text',
    },
    description: 'URL or path to navigate to when clicking',
    table: {
      category: 'html',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultProps.href,
      },
    },
    type: {
      required: true,
    },
  },
}
