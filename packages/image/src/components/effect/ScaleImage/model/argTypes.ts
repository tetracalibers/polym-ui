import { defaultProps, modeOptions, scaleFactorRange } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  zoom: {
    control: {
      type: 'radio',
    },
    options: modeOptions,
    description: '"in" means shrinking, "out" means expanding.',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'scale',
      defaultValue: {
        summary: defaultProps.zoom,
        details: null,
      },
    },
  },
  withRotate: {
    control: {
      type: 'boolean',
    },
    description: 'Whether to rotate at the same time as scaling',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'rotate',
      defaultValue: {
        summary: defaultProps.withRotate,
        details: null,
      },
    },
  },
  clockwise: {
    control: {
      type: 'boolean',
    },
    description: 'Clockwise if true, counterclockwise if false',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'rotate',
      defaultValue: {
        summary: defaultProps.clockwise,
        details: null,
      },
    },
  },
  scaleFactor: {
    control: {
      type: 'select',
    },
    options: scaleFactorRange,
    description:
      'A value that controls the scaling factor of the element.\nIf zoom="in", the value is as is; if zoom="out", the value is the actual magnification factor plus 1.',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'scale',
      defaultValue: {
        summary: defaultProps.scaleFactor,
        details: null,
      },
    },
  },
}
