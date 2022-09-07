import {
  gradientEffectTypeOptions,
  defaultGradientStyleProps,
  defaultBurglarizeStyleProps,
  burglarizePushToOptions,
  defaultFlowGradientStyleProps,
  defaultScaleGradientStyleProps,
  scaleGradientHoverEffectOptions,
} from './../model/style'
import { ArgType } from '../../../../doc/argTypes'

/* -------------------------------------------- */

export const gradientStyleArgTypes = {
  hoverEffect: {
    control: {
      type: 'radio',
    },
    options: gradientEffectTypeOptions,
    description: '',
    table: {
      category: 'effect',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultGradientStyleProps.hoverEffect,
      },
    },
  },
}

/* -------------------------------------------- */

export const flowGradientStyleArgTypes = {
  ...ArgType.bgColor01(defaultFlowGradientStyleProps),
  ...ArgType.bgColor02(defaultFlowGradientStyleProps),
  ...ArgType.bgColor03(defaultFlowGradientStyleProps),
  ...ArgType.bgColor04(defaultFlowGradientStyleProps),
  ...ArgType.slope(defaultFlowGradientStyleProps),
  ...ArgType.borderRadius(defaultFlowGradientStyleProps),
  ...ArgType.paddingY(defaultFlowGradientStyleProps),
  ...ArgType.paddingX(defaultFlowGradientStyleProps),
  ...ArgType.duration(defaultFlowGradientStyleProps),
}

/* -------------------------------------------- */

export const scaleGradientStyleArgTypes = {
  ...ArgType.bgColor01(defaultScaleGradientStyleProps),
  ...ArgType.bgColor02(defaultScaleGradientStyleProps),
  ...ArgType.slope(defaultScaleGradientStyleProps),
  ...ArgType.borderRadius(defaultScaleGradientStyleProps),
  ...ArgType.paddingY(defaultScaleGradientStyleProps),
  ...ArgType.paddingX(defaultScaleGradientStyleProps),
  ...ArgType.duration(defaultScaleGradientStyleProps),
  ...ArgType.scaleFactor(defaultScaleGradientStyleProps, {
    needIncrement: 'hoverEffect="expand"',
    notNeedIncrement: 'hoverEffect="shrink"',
  }),
  hoverEffect: {
    control: {
      type: 'radio',
    },
    options: scaleGradientHoverEffectOptions,
    description: '',
    table: {
      category: 'effect',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultScaleGradientStyleProps.hoverEffect,
      },
    },
  },
}

/* -------------------------------------------- */

export const burglarizeStyleArgTypes = {
  ...ArgType.bgColor(defaultBurglarizeStyleProps),
  ...ArgType.color(defaultBurglarizeStyleProps),
  ...ArgType.borderRadius(defaultBurglarizeStyleProps),
  ...ArgType.paddingY(defaultBurglarizeStyleProps),
  ...ArgType.paddingX(defaultBurglarizeStyleProps),
  ...ArgType.duration(defaultBurglarizeStyleProps),
  offset: {
    control: {
      type: 'number',
    },
    description: 'Shadow offset',
    table: {
      type: {
        summary: 'number (px)',
      },
      category: 'effect',
      defaultValue: {
        summary: defaultBurglarizeStyleProps.offset,
        detail: null,
      },
    },
  },
  pushTo: {
    control: {
      type: 'radio',
    },
    options: burglarizePushToOptions,
    description: 'Direction of push in hover',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      defaultValue: {
        summary: defaultBurglarizeStyleProps.pushTo,
        detail: null,
      },
    },
  },
}
