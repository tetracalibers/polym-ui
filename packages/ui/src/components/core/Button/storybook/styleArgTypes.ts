import {
  gradientEffectTypeOptions,
  defaultGradientStyleProps,
  defaultBurglarizeStyleProps,
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
  bgColor: {
    ...withDefaultBurglarizeAs('backgroundColor'),
    table: {
      ...withDefaultBurglarizeAs('backgroundColor').table,
      defaultValue: {
        summary: defaultBurglarizeStyleProps.bgColor,
        detail: null,
      },
    },
  },
  borderRadiusV: {
    ...withDefaultBurglarizeAs('borderRadius'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultBurglarizeAs('borderRadius').table,
      defaultValue: {
        summary: defaultBurglarizeStyleProps.borderRadiusV,
        detail: null,
      },
    },
  },
  borderRadiusU: {
    ...withDefaultBurglarizeAs('borderRadius'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of borderRadiusV',
    table: {
      ...withDefaultBurglarizeAs('borderRadius').table,
      defaultValue: {
        summary: defaultBurglarizeStyleProps.borderRadiusU,
        detail: null,
      },
    },
  },
  paddingYV: {
    ...withDefaultBurglarizeAs('padding'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultBurglarizeAs('padding').table,
      defaultValue: {
        summary: defaultBurglarizeStyleProps.paddingYV,
        detail: null,
      },
    },
  },
  paddingYU: {
    ...withDefaultBurglarizeAs('padding'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of paddingYV',
    table: {
      ...withDefaultBurglarizeAs('padding').table,
      defaultValue: {
        summary: defaultBurglarizeStyleProps.paddingYU,
        detail: null,
      },
    },
  },
  paddingXV: {
    ...withDefaultBurglarizeAs('padding'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultBurglarizeAs('padding').table,
      defaultValue: {
        summary: defaultBurglarizeStyleProps.paddingXV,
        detail: null,
      },
    },
  },
  paddingXU: {
    ...withDefaultBurglarizeAs('padding'),
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of paddingXV',
    table: {
      ...withDefaultBurglarizeAs('padding').table,
      defaultValue: {
        summary: defaultBurglarizeStyleProps.paddingXU,
        detail: null,
      },
    },
  },
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
  duration: {
    ...withDefaultBurglarizeAs('transitionDuration'),
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultBurglarizeAs('transitionDuration').table,
      type: {
        summary: 'number (s)',
      },
      defaultValue: {
        summary: defaultBurglarizeStyleProps.duration,
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
