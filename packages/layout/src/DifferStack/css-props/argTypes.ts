import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  space: {
    ...withDefaultAs('gap'),
    description: 'Minimum space to be reserved between child elements',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: '',
        details: null,
      },
    },
  },
  justifyContent: {
    ...withDefaultAs('justifyContent'),
  },
  alignItems: {
    ...withDefaultAs('alignItems'),
  },
}
