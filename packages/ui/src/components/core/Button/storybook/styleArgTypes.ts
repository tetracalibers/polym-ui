import {
  gradientEffectTypeOptions,
  defaultGradientStyleProps,
} from './../model/style'
import { CssStyle } from 'ts-typedef-helper'

export const gradientStyleArgTypes = {
  hoverEffect: {
    control: {
      type: 'radio',
    },
    options: gradientEffectTypeOptions,
    description: '',
    table: {
      category: 'effect',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultGradientStyleProps.hoverEffect,
      },
    },
  },
}
