import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  color: {
    ...withDefaultAs('color'),
  },
  backgroundColor: {
    ...withDefaultAs('backgroundColor'),
  },
  padding: {
    ...withDefaultAs('padding'),
  },
  borderRadius: {
    ...withDefaultAs('borderRadius'),
  },
}
