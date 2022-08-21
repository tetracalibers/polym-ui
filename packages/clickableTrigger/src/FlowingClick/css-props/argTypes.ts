import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  borderWidth: {
    ...withDefaultAs('borderWidth'),
  },
  borderStyle: {
    ...withDefaultAs('borderStyle'),
  },
  borderColor: {
    ...withDefaultAs('borderColor'),
  },
  color: {
    ...withDefaultAs('color'),
  },
  backgroundColor: {
    ...withDefaultAs('backgroundColor'),
  },
  transitionDuration: {
    ...withDefaultAs('transitionDuration'),
  },
  padding: {
    ...withDefaultAs('padding'),
  },
  borderRadius: {
    ...withDefaultAs('borderRadius'),
  },
}
