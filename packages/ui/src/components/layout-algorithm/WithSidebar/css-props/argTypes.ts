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
  sideWidth: {
    ...withDefaultAs('maxWidth'),
    description: 'Width of sidebar when side-by-side',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.sideWidth,
        details: null,
      },
    },
  },
}
