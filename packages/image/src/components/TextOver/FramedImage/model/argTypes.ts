import { defaultProps, triggerOptions } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
const withDefaultAs = useSetDefaultAs(defaultProps)

export const logicArgTypes = {
  txtDuration: {
    ...withDefaultAs('transitionDuration'),
    description: 'Time it takes for text above the image to appear',
    table: {
      ...withDefaultAs('transitionDuration').table,
      defaultValue: {
        summary: defaultProps.txtDuration,
        details: null,
      },
      category: 'effect',
      subcategory: 'animation',
    },
  },
  imgPadding: {
    ...withDefaultAs('padding').table,
    control: {
      type: 'text',
    },
    description:
      'Size of the gap between the edge of the image and the edge of the background',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.imgPadding,
        details: null,
      },
    },
  },
  trigger: {
    control: {
      type: 'radio',
    },
    options: triggerOptions,
    description:
      'Which action activates the effect. (Setting "none" always activates the effect.)',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      defaultValue: {
        summary: defaultProps.trigger,
        details: null,
      },
    },
  },
  imgBlur: {
    control: {
      type: 'number',
    },
    description: 'radius of blur (px)',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'filter',
      defaultValue: {
        summary: defaultProps.imgBlur,
        details: null,
      },
    },
  },
  imgOpacity: {
    control: {
      type: 'number',
    },
    description:
      '1 for no transparency, 0 for transparency, and transparency between the two.',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'filter',
      defaultValue: {
        summary: defaultProps.imgOpacity,
        details: null,
      },
    },
  },
  imgGrayScale: {
    control: {
      type: 'number',
    },
    description: 'degree of monochrome (%)',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'filter',
      defaultValue: {
        summary: defaultProps.imgGrayScale,
        details: null,
      },
    },
  },
}
