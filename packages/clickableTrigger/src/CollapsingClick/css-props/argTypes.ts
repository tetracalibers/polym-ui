import { useSetDefaultAs } from 'story-builder'
import { offsetOptions, styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  color: {
    ...withDefaultAs('color'),
  },
  backgroundColor: {
    ...withDefaultAs('backgroundColor'),
  },
  borderRadius: {
    ...withDefaultAs('borderRadius'),
  },
  padding: {
    ...withDefaultAs('padding'),
  },
  offset: {
    control: {
      type: 'select',
    },
    options: offsetOptions,
    description: 'Shadow offset',
    table: {
      type: {
        summary: null,
      },
      category: 'component style',
      defaultValue: {
        summary: styleDefaultProps.offset,
        detail: null,
      },
    },
  },
}
