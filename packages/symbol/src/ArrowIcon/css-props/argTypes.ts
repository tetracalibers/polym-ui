import { useSetDefaultAs } from 'story-builder'
import { CssStyle } from 'ts-typedef-helper'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  sizeV: {
    control: {
      type: 'number',
    },
    description: 'Numeric value for the length of the side of the arrow',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.sizeV,
        details: null,
      },
    },
  },
  sizeU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of sizeV',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.sizeU,
        details: null,
      },
    },
  },
  color: {
    ...withDefaultAs('color'),
    description: 'Color of arrow',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.color,
        details: null,
      },
    },
  },
}
