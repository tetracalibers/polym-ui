import { useSetDefaultAs } from 'story-builder'
import { defaultProps } from '..'
import { blurRadiusRange, styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  animationDuration: {
    ...withDefaultAs('animationDuration'),
  },
  blurRadius: {
    control: {
      type: 'select',
    },
    options: blurRadiusRange,
    description: 'Radius of blur when element appears',
    table: {
      type: {
        summary: null,
      },
      category: 'Style Control',
      defaultValue: {
        summary: defaultProps.blurRadius,
        details: null,
      },
    },
  },
}
