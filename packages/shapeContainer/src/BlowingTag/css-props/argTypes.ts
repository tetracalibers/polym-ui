import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  borderRadius: {
    ...withDefaultAs('borderRadius'),
  },
  backgroundColor: {
    ...withDefaultAs('backgroundColor'),
  },
  width: {
    ...withDefaultAs('width'),
    description: 'Width of the element (px)',
    control: {
      type: 'number',
    },
  },
  height: {
    ...withDefaultAs('height'),
    description: 'Height of the element (px)',
    control: {
      type: 'number',
    },
  },
}
