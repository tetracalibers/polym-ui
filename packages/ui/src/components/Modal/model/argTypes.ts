import { CssStyle } from 'ts-typedef-helper'

export const coreArgTypes = {
  children: {
    control: {
      type: null,
    },
    description: 'Elements to be displayed as headings',
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
  open: {
    control: {
      type: 'boolean',
    },
    description: 'Whether to keep the modal open or not',
    table: {
      category: 'feature',
      type: {
        summary: null,
      },
    },
    type: {
      required: true,
    },
  },
}
