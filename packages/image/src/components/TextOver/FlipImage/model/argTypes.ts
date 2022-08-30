import { defaultProps, flipAxisOptions } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
const withDefaultAs = useSetDefaultAs(defaultProps)

export const logicArgTypes = {
  flipAxis: {
    control: {
      type: 'radio',
    },
    options: flipAxisOptions,
    description: 'Axis of rotation',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      subcategory: 'animation',
      defaultValue: {
        summary: defaultProps.flipAxis,
        details: null,
      },
    },
  },
  duration: {
    ...withDefaultAs('transitionDuration'),
    description: 'Time required for rotation',
    table: {
      ...withDefaultAs('transitionDuration').table,
      defaultValue: {
        summary: defaultProps.duration,
        details: null,
      },
      category: 'effect',
      subcategory: 'animation',
    },
  },
}
