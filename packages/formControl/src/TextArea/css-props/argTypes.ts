import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  lineHeight: {
    ...withDefaultAs('lineHeight'),
    control: {
      type: 'number',
    },
    description: 'line height (px)',
  },
}
