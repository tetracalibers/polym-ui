import { defaultProps } from './../index'
import { useSetDefaultAs } from 'story-builder'
import { scaleFactorRange, styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  animationDuration: {
    ...withDefaultAs('animationDuration'),
  },
  scaleFactor: {
    control: {
      type: 'select',
    },
    options: scaleFactorRange,
    description:
      'A value that controls the scaling factor of the element.\nIf zoom="in", the value is as is; if zoom="out", the value is the actual magnification factor plus 1.',
    table: {
      type: {
        summary: null,
      },
      category: 'Style Control',
      defaultValue: {
        summary: defaultProps.scaleFactor,
        details: null,
      },
    },
  },
}
