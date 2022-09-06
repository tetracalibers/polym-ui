import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'

const withDefaultAs = useSetDefaultAs({})

/* -------------------------------------------- */
/* REACT                                        */
/* -------------------------------------------- */

const children = (type: string | null = null, required = true) => ({
  children: {
    control: {
      type,
    },
    description: '',
    table: {
      category: 'react',
      type: {
        summary: null,
      },
    },
    type: {
      required,
    },
  },
})

/* -------------------------------------------- */
/* CSS                                          */
/* -------------------------------------------- */

const fontSize = (defaultProps: {
  fontSizeV?: number
  fontSizeU?: CssStyle.Unit.Length
}) => ({
  fontSizeV: {
    ...withDefaultAs('fontSize'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('fontSize').table,
      defaultValue: {
        summary: defaultProps.fontSizeV,
        detail: null,
      },
    },
  },
  fontSizeU: {
    ...withDefaultAs('fontSize'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of fontSizeV',
    table: {
      ...withDefaultAs('fontSize').table,
      defaultValue: {
        summary: defaultProps.fontSizeU,
        detail: null,
      },
    },
  },
})

const lineHeight = (defaultProps: {
  lineHeightV?: number
  lineHeightU?: CssStyle.Unit.Length
}) => ({
  lineHeightV: {
    ...withDefaultAs('lineHeight'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('lineHeight').table,
      defaultValue: {
        summary: defaultProps.lineHeightV,
        detail: null,
      },
    },
  },
  lineHeightU: {
    ...withDefaultAs('lineHeight'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of lineHeightV',
    table: {
      ...withDefaultAs('lineHeight').table,
      defaultValue: {
        summary: defaultProps.lineHeightU,
        detail: null,
      },
    },
  },
})

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
      subcategory: 'gradient',
    },
  },
})

const bgColor01 = (defaultProps: { bgColor01?: string }) => ({
  bgColor01: {
    ...withDefaultAs('backgroundColor'),
    table: {
      ...withDefaultAs('backgroundColor').table,
      defaultValue: {
        summary: defaultProps.bgColor01,
        detail: null,
      },
      subcategory: 'gradient',
    },
  },
})

const bgColor02 = (defaultProps: { bgColor02?: string }) => ({
  bgColor02: {
    ...withDefaultAs('backgroundColor'),
    table: {
      ...withDefaultAs('backgroundColor').table,
      defaultValue: {
        summary: defaultProps.bgColor02,
        detail: null,
      },
      subcategory: 'gradient',
    },
  },
})

const bgColor03 = (defaultProps: { bgColor03?: string }) => ({
  bgColor03: {
    ...withDefaultAs('backgroundColor'),
    table: {
      ...withDefaultAs('backgroundColor').table,
      defaultValue: {
        summary: defaultProps.bgColor03,
        detail: null,
      },
      subcategory: 'gradient',
    },
  },
})

const bgColor04 = (defaultProps: { bgColor04?: string }) => ({
  bgColor04: {
    ...withDefaultAs('backgroundColor'),
    table: {
      ...withDefaultAs('backgroundColor').table,
      defaultValue: {
        summary: defaultProps.bgColor04,
        detail: null,
      },
      subcategory: 'gradient',
    },
  },
})

const slope = (defaultProps: { slope?: number }) => ({
  slope: {
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('background').table,
      defaultValue: {
        summary: defaultProps.slope,
        detail: null,
      },
      subcategory: 'gradient',
    },
  },
})

/* -------------------------------------------- */

export const ArgType = {
  children,
  fontSize,
  lineHeight,
  borderRadius,
  paddingX,
  paddingY,
  duration,
  color,
  bgColor,
  bgColor01,
  bgColor02,
  bgColor03,
  bgColor04,
  slope,
}
