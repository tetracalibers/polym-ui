import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
const withDefaultAs = useSetDefaultAs(defaultProps)

export const thisArgTypes = {
  paddingYV: {
    ...withDefaultAs('padding'),
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the size of the vertical inner margin of heading area',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.paddingYV,
      },
    },
  },
  paddingXV: {
    ...withDefaultAs('padding'),
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the size of the horizontal inner margin of heading area',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.paddingXV,
      },
    },
  },
  paddingYU: {
    ...withDefaultAs('padding'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of paddingYV',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.paddingYU,
      },
    },
  },
  paddingXU: {
    ...withDefaultAs('padding'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of paddingXV',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.paddingXU,
      },
    },
  },
  bgColor: {
    ...withDefaultAs('backgroundColor'),
    description: 'Background color of heading area',
    table: {
      ...withDefaultAs('backgroundColor').table,
      defaultValue: {
        summary: defaultProps.bgColor,
      },
    },
  },
  color: {
    ...withDefaultAs('color'),
  },
}
