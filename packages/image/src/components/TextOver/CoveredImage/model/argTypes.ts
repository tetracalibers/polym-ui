import { defaultProps, motionTypeOptions, triggerOptions } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
const withDefaultAs = useSetDefaultAs(defaultProps)

export const logicArgTypes = {
  motionType: {
    control: {
      type: 'radio',
    },
    options: motionTypeOptions,
    description:
      'Type of animation when background and text appear over the image',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'animation',
      defaultValue: {
        summary: defaultProps.motionType,
        details: null,
      },
    },
  },
  bgDuration: {
    ...withDefaultAs('transitionDuration'),
    description: 'Time required to animate the background',
    table: {
      ...withDefaultAs('transitionDuration').table,
      defaultValue: {
        summary: defaultProps.bgDuration,
        details: null,
      },
      category: 'effect',
      subcategory: 'animation',
    },
  },
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
  bgOpacity: {
    control: {
      type: 'number',
    },
    description: 'Transparency of the color covering the image',
    table: {
      ...withDefaultAs('opacity').table,
      defaultValue: {
        summary: defaultProps.bgOpacity,
        details: null,
      },
    },
  },
  imgPaddingV: {
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the size of the gap between the edge of the image and the edge of the background',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.imgPaddingV,
        details: null,
      },
    },
  },
  imgPaddingU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of imgPaddingV',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultProps.imgPaddingU,
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
}
