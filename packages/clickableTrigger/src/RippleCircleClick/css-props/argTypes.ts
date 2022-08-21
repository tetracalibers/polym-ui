import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  color: {
    ...withDefaultAs('color'),
    type: {
      required: true,
    },
  },
  backgroundColor: {
    ...withDefaultAs('backgroundColor'),
    type: {
      required: true,
    },
  },
  hoverStyle: {
    ...withDefaultAs('hoverStyle'),
    type: {
      required: true,
    },
  },
}
