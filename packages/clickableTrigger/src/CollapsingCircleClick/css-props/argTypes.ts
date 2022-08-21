import { cssStoryMeta } from 'story-builder'

export const styleArgTypes = {
  borderWidth: {
    ...cssStoryMeta.borderWidth,
    type: {
      required: true,
    },
  },
  borderStyle: {
    ...cssStoryMeta.borderStyle,
    type: {
      required: true,
    },
  },
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
  width: {
    ...cssStoryMeta.width,
    type: { required: true },
  },
}
