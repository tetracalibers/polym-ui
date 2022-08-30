import { commonDefaultProps } from './props'

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
    control: {
      type: 'text',
    },
    description: 'CSS width value to be applied to the img tag',
    table: {
      type: {
        summary: null,
      },
      category: 'css',
      defaultValue: {
        summary: commonDefaultProps.width,
      },
    },
  },
  height: {
    control: {
      type: 'text',
    },
    description: 'CSS height value to be applied to the img tag',
    table: {
      type: {
        summary: null,
      },
      category: 'css',
      defaultValue: {
        summary: commonDefaultProps.height,
      },
    },
  },
}
