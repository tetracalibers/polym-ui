import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  itemWidth: {
    ...withDefaultAs('width'),
    description: 'Width of each item',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: '',
        details: null,
      },
    },
  },
  height: {
    ...withDefaultAs('height'),
    description: 'Height of the SliderAlign component itself',
  },
}
