import {
  gradientEffectTypeOptions,
  defaultGradientStyleProps,
  defaultBurglarizeStyleProps,
  burglarizeOffsetOptions,
  burglarizePushToOptions,
} from './../model/style'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'

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

const withDefaultBurglarizeAs = useSetDefaultAs(defaultBurglarizeStyleProps)

export const burglarizeStyleArgTypes = {
  color: {
    ...withDefaultBurglarizeAs('color'),
  },
  backgroundColor: {
    ...withDefaultBurglarizeAs('backgroundColor'),
  },
  borderRadius: {
    ...withDefaultBurglarizeAs('borderRadius'),
  },
  padding: {
    ...withDefaultBurglarizeAs('padding'),
  },
  offset: {
    control: {
      type: 'select',
    },
    options: burglarizeOffsetOptions,
    description: 'Shadow offset',
    table: {
      type: {
        summary: null,
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
