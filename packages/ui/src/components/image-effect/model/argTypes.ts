import { commonDefaultProps } from './props'
import { useSetDefaultAs } from 'story-builder'

const withDefaultAs = useSetDefaultAs(commonDefaultProps)

export const commmonArgTypes = {
  as: {
    control: {
      type: null,
    },
    description:
      'By specifying a React or Styled component that wraps an HTML img element, you can add the style and functionality that the component has.',
    table: {
      category: 'polym system',
      type: {
        summary: null,
      },
    },
  },
  src: {
    control: {
      type: null,
    },
    description: 'Image url and path',
    table: {
      type: {
        summary: null,
      },
      category: 'html',
    },
    type: {
      required: true,
    },
  },
  alt: {
    control: {
      type: 'text',
    },
    description:
      'Alternative text that is comfortable to replace and conveys the content without overloading. (Do not specify if the image is for decorative purposes only.)',
    table: {
      type: {
        summary: null,
      },
      category: 'html',
    },
  },
  width: {
    ...withDefaultAs('width'),
    description: 'CSS width value to be applied to the img tag',
  },
  height: {
    ...withDefaultAs('height'),
    description: 'CSS height value to be applied to the img tag',
  },
}
