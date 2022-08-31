import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
const withDefaultAs = useSetDefaultAs(defaultProps)

export const logicArgTypes = {
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
