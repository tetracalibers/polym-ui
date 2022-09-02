import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
const withDefaultAs = useSetDefaultAs(defaultProps)

export const thisArgTypes = {
  paddingBottomV: {
    ...withDefaultAs('padding'),
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the gap between the heading text and the underline',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.paddingBottomV,
      },
    },
  },
  paddingBottomU: {
    ...withDefaultAs('padding'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of paddingBottomV',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.paddingBottomU,
      },
    },
  },
  lineThicknessV: {
    ...withDefaultAs('borderWidth'),
    control: {
      type: 'number',
    },
    description: 'Numeric value for underline thickness',
    table: {
      ...withDefaultAs('borderWidth').table,
      defaultValue: {
        summary: defaultProps.lineThicknessV,
      },
    },
  },
  lineThicknessU: {
    ...withDefaultAs('borderWidth'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of lineThicknessV',
    table: {
      ...withDefaultAs('borderWidth').table,
      defaultValue: {
        summary: defaultProps.lineThicknessU,
      },
    },
  },
  lineStyle: {
    ...withDefaultAs('borderStyle'),
    description: 'Type of underlining',
    table: {
      ...withDefaultAs('borderStyle').table,
      defaultValue: {
        summary: defaultProps.lineStyle,
      },
    },
  },
  lineColor: {
    ...withDefaultAs('borderColor'),
    description: 'Color of underline',
    table: {
      ...withDefaultAs('borderColor').table,
      defaultValue: {
        summary: defaultProps.lineColor,
      },
    },
  },
  color: {
    ...withDefaultAs('color'),
  },
}
