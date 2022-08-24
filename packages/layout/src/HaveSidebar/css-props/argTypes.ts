import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  spaceBetween: {
    ...withDefaultAs('marginLeft'),
    description: 'Gap between sidebar and main content',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.spaceBetween,
        details: null,
      },
    },
  },
  sideMaxWidth: {
    ...withDefaultAs('maxWidth'),
    description: 'Maximum width of sidebar in vertical placement',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.sideMaxWidth,
        details: null,
      },
    },
  },
}
