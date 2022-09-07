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

type CssOptionalArgs = {
  subcategory?: string
}

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

const lineHeight = (defaultProps: { lineHeight?: number }) => ({
  lineHeight: {
    ...withDefaultAs('lineHeight'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('lineHeight').table,
      defaultValue: {
        summary: defaultProps.lineHeight,
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
    },
  },
})

/* Gradient ----------------------------------- */

const bgColor01 = (defaultProps: { bgColor01?: string }) => ({
  bgColor01: {
    ...withDefaultAs('backgroundColor'),
    table: {
      ...withDefaultAs('backgroundColor').table,
      defaultValue: {
        summary: defaultProps.bgColor01,
        detail: null,
      },
      subcategory: 'Gradient',
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
      subcategory: 'Gradient',
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
      subcategory: 'Gradient',
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
      subcategory: 'Gradient',
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
      subcategory: 'Gradient',
    },
  },
})

/* shadow ------------------------------------- */

const shadowOffsetX = (defaultProps: {
  shadowOffsetXV?: number
  shadowOffsetXU?: CssStyle.Unit.Length
}) => ({
  shadowOffsetXV: {
    control: {
      type: 'number',
    },
    description: '',
    table: {
      ...withDefaultAs('boxShadow').table,
      defaultValue: {
        summary: defaultProps.shadowOffsetXV,
        detail: null,
      },
      subcategory: 'Shadow',
    },
  },
  shadowOffsetXU: {
    ...withDefaultAs('boxShadow'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of shadowOffsetXV',
    table: {
      ...withDefaultAs('boxShadow').table,
      defaultValue: {
        summary: defaultProps.shadowOffsetXU,
        detail: null,
      },
      subcategory: 'Shadow',
    },
  },
})

const shadowOffsetY = (defaultProps: {
  shadowOffsetYV?: number
  shadowOffsetYU?: CssStyle.Unit.Length
}) => ({
  shadowOffsetYV: {
    control: {
      type: 'number',
    },
    description: '',
    table: {
      ...withDefaultAs('boxShadow').table,
      defaultValue: {
        summary: defaultProps.shadowOffsetYV,
        detail: null,
      },
      subcategory: 'Shadow',
    },
  },
  shadowOffsetYU: {
    ...withDefaultAs('boxShadow'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of shadowOffsetXV',
    table: {
      ...withDefaultAs('boxShadow').table,
      defaultValue: {
        summary: defaultProps.shadowOffsetYU,
        detail: null,
      },
      subcategory: 'Shadow',
    },
  },
})

const shadowBlur = (defaultProps: {
  shadowBlurV?: number
  shadowBlurU?: CssStyle.Unit.Length
}) => ({
  shadowBlurV: {
    control: {
      type: 'number',
    },
    description: '',
    table: {
      ...withDefaultAs('boxShadow').table,
      defaultValue: {
        summary: defaultProps.shadowBlurV,
        detail: null,
      },
      subcategory: 'Shadow',
    },
  },
  shadowBlurU: {
    ...withDefaultAs('boxShadow'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of shadowBlurV',
    table: {
      ...withDefaultAs('boxShadow').table,
      defaultValue: {
        summary: defaultProps.shadowBlurU,
        detail: null,
      },
      subcategory: 'Shadow',
    },
  },
})

const shadowColor = (defaultProps: { shadowColor?: string }) => ({
  shadowColor: {
    control: {
      type: 'color',
    },
    description: '',
    table: {
      ...withDefaultAs('boxShadow').table,
      defaultValue: {
        summary: defaultProps.shadowColor,
        detail: null,
      },
      subcategory: 'Shadow',
    },
  },
})

/* border ------------------------------------- */

const borderWidth = (defaultProps: {
  borderWidthV?: number
  borderWidthU?: CssStyle.Unit.Length
}) => ({
  borderWidthV: {
    control: {
      type: 'number',
    },
    description: '',
    table: {
      ...withDefaultAs('borderWidth').table,
      defaultValue: {
        summary: defaultProps.borderWidthV,
        detail: null,
      },
      subcategory: 'Border',
    },
  },
  borderWidthU: {
    ...withDefaultAs('borderWidth'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of borderWidthV',
    table: {
      ...withDefaultAs('borderWidth').table,
      defaultValue: {
        summary: defaultProps.borderWidthU,
        detail: null,
      },
      subcategory: 'Border',
    },
  },
})

const borderStyle = (defaultProps: { borderStyle?: string }) => ({
  borderStyle: {
    ...withDefaultAs('borderStyle'),
    table: {
      ...withDefaultAs('borderStyle').table,
      defaultValue: {
        summary: defaultProps.borderStyle,
        detail: null,
      },
      subcategory: 'Border',
    },
  },
})

const borderColor = (defaultProps: { borderColor?: string }) => ({
  borderColor: {
    ...withDefaultAs('borderColor'),
    table: {
      ...withDefaultAs('borderColor').table,
      defaultValue: {
        summary: defaultProps.borderColor,
        detail: null,
      },
      subcategory: 'Border',
    },
  },
})

/* line --------------------------------------- */

const lineColor = (
  defaultProps: { lineColor?: string },
  option?: CssOptionalArgs
) => ({
  lineColor: {
    ...withDefaultAs('borderColor'),
    table: {
      ...withDefaultAs('borderColor').table,
      defaultValue: {
        summary: defaultProps.lineColor,
        detail: null,
      },
      subcategory:
        option?.subcategory ?? withDefaultAs('borderColor').table.subcategory,
    },
  },
})

const underOffset = (
  defaultProps: {
    underOffsetV?: number
    underOffsetU?: CssStyle.Unit.Length
  },
  option?: CssOptionalArgs
) => ({
  underOffsetV: {
    ...withDefaultAs('textUnderlineOffset'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('textUnderlineOffset').table,
      defaultValue: {
        summary: defaultProps.underOffsetV,
        detail: null,
      },
      subcategory:
        option?.subcategory ??
        withDefaultAs('textUnderlineOffset').table.subcategory,
    },
  },
  underOffsetU: {
    ...withDefaultAs('textUnderlineOffset'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of underOffsetV',
    table: {
      ...withDefaultAs('textUnderlineOffset').table,
      defaultValue: {
        summary: defaultProps.underOffsetU,
        detail: null,
      },
      subcategory:
        option?.subcategory ??
        withDefaultAs('textUnderlineOffset').table.subcategory,
    },
  },
})

const thickness = (
  defaultProps: {
    thicknessV?: number
    thicknessU?: CssStyle.Unit.Length
  },
  option?: CssOptionalArgs
) => ({
  thicknessV: {
    ...withDefaultAs('borderWidth'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('borderWidth').table,
      defaultValue: {
        summary: defaultProps.thicknessV,
        detail: null,
      },
      subcategory:
        option?.subcategory ?? withDefaultAs('borderWidth').table.subcategory,
    },
  },
  thicknessU: {
    ...withDefaultAs('borderWidth'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of thicknessV',
    table: {
      ...withDefaultAs('borderWidth').table,
      defaultValue: {
        summary: defaultProps.thicknessU,
        detail: null,
      },
      subcategory:
        option?.subcategory ?? withDefaultAs('borderWidth').table.subcategory,
    },
  },
})

const scaleFactor = (
  defaultProps: { scaleFactor?: number },
  conditions: {
    needIncrement: string
    notNeedIncrement: string
  }
) => ({
  scaleFactor: {
    control: {
      type: 'number',
    },
    description: `A value that controls the scaling factor of the element.\nIf ${conditions.notNeedIncrement}, the value is as is; if ${conditions.needIncrement}, the value is the actual magnification factor plus 1.`,
    table: {
      ...withDefaultAs('scale').table,
      defaultValue: {
        summary: defaultProps.scaleFactor,
        details: null,
      },
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
  lineColor,
  underOffset,
  thickness,
  scaleFactor,
  shadowBlur,
  shadowOffsetX,
  shadowOffsetY,
  shadowColor,
  borderWidth,
  borderColor,
  borderStyle,
}
