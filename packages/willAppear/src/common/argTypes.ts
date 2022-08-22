import { commonDefaultProps } from './props'

export const commmonArgTypes = {
  as: {
    control: {
      type: null,
    },
    description:
      'HTML elements or React components that you want to appear in the animation',
    table: {
      category: 'character',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: commonDefaultProps.as,
      },
    },
    type: {
      required: true,
    },
  },
}
