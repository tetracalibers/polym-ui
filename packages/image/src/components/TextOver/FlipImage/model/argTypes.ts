import { defaultProps, motionTypeOptions } from './props'
import { CssStyle } from 'ts-typedef-helper'

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
}
