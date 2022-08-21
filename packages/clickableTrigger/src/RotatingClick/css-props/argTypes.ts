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
  borderColor: {
    ...withDefaultAs('borderColor'),
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
  transitionDuration: {
    ...withDefaultAs('transitionDuration'),
    type: {
      required: true,
    },
  },
  width: {
    ...withDefaultAs('width'),
    type: { required: true },
  },
  height: {
    ...withDefaultAs('height'),
    type: {
      required: true,
    },
  },
  padding: {
    ...withDefaultAs('padding'),
  },
  borderRadius: {
    ...withDefaultAs('borderRadius'),
  },
}
