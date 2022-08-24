import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  space: {
    ...withDefaultAs('gap'),
    description: 'Spacing of elements horizontally aligned',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.space,
        details: null,
      },
    },
  },
  breakpoint: {
    ...withDefaultAs('width'),
    description:
      'Breakpoints that switch from horizontal to vertical alignment',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: styleDefaultProps.breakpoint,
        details: null,
      },
    },
  },
}
