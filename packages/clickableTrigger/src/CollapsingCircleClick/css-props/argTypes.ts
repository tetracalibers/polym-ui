import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  borderWidth: {
    ...withDefaultAs('borderWidth'),
    type: {
      required: true,
    },
  },
  borderStyle: {
    ...withDefaultAs('borderStyle'),
    type: {
      required: true,
    },
  },
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
  width: {
    ...withDefaultAs('width'),
    type: { required: true },
  },
}
