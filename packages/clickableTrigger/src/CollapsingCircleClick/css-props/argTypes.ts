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
  color: {
    ...withDefaultAs('color'),
  },
  backgroundColor: {
    ...withDefaultAs('backgroundColor'),
  },
  width: {
    ...withDefaultAs('width'),
  },
}
