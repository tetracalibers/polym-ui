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
  drawDuration: {
    ...withDefaultAs('transitionDuration'),
    description:
      'Time it takes for the line to be completely drawn over the image',
    table: {
      ...withDefaultAs('transitionDuration').table,
      defaultValue: {
        summary: defaultProps.drawDuration,
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
      category: 'effect',
      subcategory: 'space',
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
  lineColor: {
    ...withDefaultAs('borderColor'),
    description: 'Color of the enclosing line drawn over the image',
    table: {
      ...withDefaultAs('borderColor').table,
      defaultValue: {
        summary: defaultProps.lineColor,
        details: null,
      },
      category: 'effect',
      subcategory: 'line',
    },
  },
  lineStyle: {
    ...withDefaultAs('borderStyle'),
    description: 'Type of enclosure line drawn over the image',
    table: {
      ...withDefaultAs('borderStyle').table,
      defaultValue: {
        summary: defaultProps.lineStyle,
        details: null,
      },
      category: 'effect',
      subcategory: 'line',
    },
  },
  lineThickness: {
    ...withDefaultAs('borderWidth'),
    description: 'Thickness of the enclosing line drawn over the image (px)',
    control: {
      type: 'number',
    },
    table: {
      ...withDefaultAs('borderWidth').table,
      defaultValue: {
        summary: defaultProps.lineThickness,
        details: null,
      },
      category: 'effect',
      subcategory: 'line',
    },
  },
}
