import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  paddingX: {
    ...withDefaultAs('paddingLeft'),
    descripton: 'Space at both ends of content',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.paddingX,
        details: null,
      },
    },
  },
  maxWidth: {
    ...withDefaultAs('maxWidth'),
  },
}
