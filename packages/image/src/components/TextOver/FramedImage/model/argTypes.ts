import { defaultProps, triggerOptions } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
const withDefaultAs = useSetDefaultAs(defaultProps)

export const logicArgTypes = {
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
  bgColor: {
    ...withDefaultAs('backgroundColor'),
    description: 'color overlaid on an image',
    table: {
      ...withDefaultAs('backgroundColor').table,
      defaultValue: {
        summary: defaultProps.bgColor,
        details: null,
      },
    },
  },
}
