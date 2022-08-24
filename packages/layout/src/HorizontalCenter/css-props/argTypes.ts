import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  paddingX: {
    ...withDefaultAs('paddingLeft'),
    descripton: 'Space at both ends of content',
  },
  maxWidth: {
    ...withDefaultAs('maxWidth'),
  },
}
