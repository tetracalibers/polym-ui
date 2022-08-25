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
}
