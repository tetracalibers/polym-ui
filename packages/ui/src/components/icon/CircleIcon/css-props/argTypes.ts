import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  color: {
    ...withDefaultAs('backgroundColor'),
    description: 'Color of circle',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.color,
        details: null,
      },
    },
  },
  borderColor: {
    ...withDefaultAs('borderColor'),
    description: 'Color of circle border',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.borderColor,
        details: null,
      },
    },
  },
  borderWidth: {
    ...withDefaultAs('borderWidth'),
    description: 'Circle Border Thickness (px)',
    control: {
      type: 'number',
    },
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.borderWidth,
        details: null,
      },
    },
  },
}
