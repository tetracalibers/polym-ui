import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'

const withDefaultAs = useSetDefaultAs({})

const borderRadius = (defaultProps: {
  borderRadiusV?: number
  borderRadiusU?: CssStyle.Unit.Length
}) => ({
  borderRadiusV: {
    ...withDefaultAs('borderRadius'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('borderRadius').table,
      defaultValue: {
        summary: defaultProps.borderRadiusV,
        detail: null,
      },
    },
  },
  borderRadiusU: {
    ...withDefaultAs('borderRadius'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of borderRadiusV',
    table: {
      ...withDefaultAs('borderRadius').table,
      defaultValue: {
        summary: defaultProps.borderRadiusU,
        detail: null,
      },
    },
  },
})

const paddingY = (defaultProps: {
  paddingYV?: number
  paddingYU?: CssStyle.Unit.Length
}) => ({
  paddingYV: {
    ...withDefaultAs('padding'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.paddingYV,
        detail: null,
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
        detail: null,
      },
    },
  },
})

const paddingX = (defaultProps: {
  paddingXV?: number
  paddingXU?: CssStyle.Unit.Length
}) => ({
  paddingXV: {
    ...withDefaultAs('padding'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.paddingXV,
        detail: null,
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
        detail: null,
      },
    },
  },
})

const duration = (defaultProps: { duration?: number }) => ({
  duration: {
    ...withDefaultAs('transitionDuration'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('transitionDuration').table,
      type: {
        summary: 'number (s)',
      },
      defaultValue: {
        summary: defaultProps.duration,
        detail: null,
      },
    },
  },
})

const color = (defaultProps: { color?: string }) => ({
  color: {
    ...withDefaultAs('color'),
    table: {
      ...withDefaultAs('color').table,
      defaultValue: defaultProps,
    },
  },
})

const bgColor = (defaultProps: { bgColor?: string }) => ({
  bgColor: {
    ...withDefaultAs('backgroundColor'),
    table: {
      ...withDefaultAs('backgroundColor').table,
      defaultValue: {
        summary: defaultProps.bgColor,
        detail: null,
      },
    },
  },
})

export const ArgType = {
  borderRadius,
  paddingX,
  paddingY,
  duration,
  color,
  bgColor,
}
