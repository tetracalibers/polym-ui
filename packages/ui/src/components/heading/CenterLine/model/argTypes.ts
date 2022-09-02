import { defaultProps, slideOptions } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
const withDefaultAs = useSetDefaultAs(defaultProps)

export const thisArgTypes = {
  slide: {
    control: {
      type: 'radio',
    },
    options: slideOptions,
    description: 'Type of animation in which the background slides out',
    table: {
      category: 'effect',
      subcategory: 'animation',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultProps.slide,
      },
    },
  },
  animatedBgColor: {
    ...withDefaultAs('backgroundColor'),
    description: 'Background color that slides out in animation',
    table: {
      category: 'effect',
      subcategory: 'animation',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultProps.animatedBgColor,
      },
    },
  },
  animatedColor: {
    ...withDefaultAs('color'),
    description: 'Text color after background appears',
    table: {
      category: 'effect',
      subcategory: 'animation',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultProps.animatedColor,
      },
    },
  },
  animateLineThickness: {
    control: {
      type: 'number',
    },
    description:
      'The thickness of the border that extends out in the animation (px)',
    table: {
      category: 'effect',
      subcategory: 'animation',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultProps.animateLineThickness,
      },
    },
  },
  duration: {
    control: {
      type: 'number',
    },
    description: 'Time required for animation (s)',
    table: {
      category: 'effect',
      subcategory: 'animation',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultProps.duration,
      },
    },
  },
  borderColor: {
    ...withDefaultAs('borderColor'),
    description: 'Color of the border of the button before hover',
  },
  borderWidth: {
    ...withDefaultAs('borderWidth'),
    control: {
      type: 'number',
    },
    description: 'Thickness of the border of the button before hover (px)',
  },
  paddingYV: {
    ...withDefaultAs('padding'),
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the size of the vertical inner margin of the button',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.paddingYV,
      },
    },
  },
  paddingXV: {
    ...withDefaultAs('padding'),
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the size of the horizontal inner margin of the button',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.paddingXV,
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
      },
    },
  },
}
