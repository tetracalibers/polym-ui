import { CssStyle } from 'ts-typedef-helper'
import { defaultHeadingCoreProps, levelOptions } from './props'

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
  level: {
    control: {
      type: 'radio',
    },
    options: levelOptions,
    description:
      'Heading level, i.e., a number indicating whether h1, h2, h3, h4, h5, or h6 tags should be used',
    table: {
      category: 'html',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultHeadingCoreProps.level,
      },
    },
  },
}
