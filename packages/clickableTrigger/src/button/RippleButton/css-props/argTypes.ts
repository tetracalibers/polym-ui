import { cssStoryMeta } from 'story-builder'

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
  padding: {
    ...cssStoryMeta.padding,
  },
  borderRadius: {
    ...cssStoryMeta.borderRadius,
  },
}
