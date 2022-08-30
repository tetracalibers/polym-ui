import { defaultProps, motionTypeOptions } from './props'
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
}
