import {
  gradientEffectTypeOptions,
  defaultGradientStyleProps,
  defaultBurglarizeStyleProps,
  burglarizePushToOptions,
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
