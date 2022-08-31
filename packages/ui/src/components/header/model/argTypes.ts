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
  children: {
    control: {
      type: null,
    },
    description: 'Elements to be included in the header tag',
    table: {
      category: 'react',
      type: {
        summary: null,
      },
    },
  },
}
