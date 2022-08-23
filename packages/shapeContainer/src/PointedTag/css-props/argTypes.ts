import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  width: {
    ...withDefaultAs('width'),
  },
  height: {
    ...withDefaultAs('height'),
  },
  backgroundColor: {
    ...withDefaultAs('backgroundColor'),
  },
}
