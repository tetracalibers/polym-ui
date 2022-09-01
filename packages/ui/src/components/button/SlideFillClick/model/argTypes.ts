import { defaultProps, slideOptions } from './props'
import { CssStyle } from 'ts-typedef-helper'

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
}
