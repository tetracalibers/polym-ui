import { cssStoryMeta } from 'story-builder'
import { styleDefaultProps } from './props'

export const styleArgTypes = {
  color: {
    ...cssStoryMeta.color,
    type: {
      required: true,
    },
  },
  backgroundColor: {
    ...cssStoryMeta.backgroundColor,
    type: {
      required: true,
    },
  },
  hoverStyle: {
    ...cssStoryMeta.hoverStyle,
    type: {
      required: true,
    },
  },
}
