import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  src: {
    control: {
      type: null,
    },
    description: 'Image url and path',
    table: {
      type: {
        summary: null,
      },
      category: 'html',
    },
    type: {
      required: true,
    },
  },
  alt: {
    control: {
      type: 'text',
    },
    description:
      'Alternative text that is comfortable to replace and conveys the content without overloading. (Do not specify if the image is for decorative purposes only.)',
    table: {
      type: {
        summary: null,
      },
      category: 'html',
    },
  },
}
