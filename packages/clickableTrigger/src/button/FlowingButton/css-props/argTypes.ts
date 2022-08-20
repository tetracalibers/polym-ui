import { cssStoryMeta } from 'story-builder'

export const substyleArgTypes = {
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
  borderColor: {
    ...cssStoryMeta.borderColor,
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
  transitionDuration: {
    ...cssStoryMeta.transitionDuration,
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
