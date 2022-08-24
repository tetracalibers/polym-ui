import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  size: {
    ...withDefaultAs('width'),
    description: 'Length of arrow side',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.size,
        details: null,
      },
    },
  },
  color: {
    ...withDefaultAs('color'),
    description: 'Color of arrow',
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
}
