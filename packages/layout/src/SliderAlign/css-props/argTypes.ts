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
        summary: styleDefaultProps.itemWidth,
        details: null,
      },
    },
  },
  height: {
    ...withDefaultAs('height'),
    description: 'Height of the SliderAlign component itself',
  },
  barBgColor: {
    ...withDefaultAs('backgroundColor'),
    description: 'Background color of scrollbar area',
    table: {
      type: {
        summary: null,
      },
      category: 'scrollbar style',
      defaultValue: {
        summary: styleDefaultProps.barBgColor,
        details: null,
      },
    },
  },
  barColor: {
    ...withDefaultAs('color'),
    description: 'Color of scrollbar',
    table: {
      type: {
        summary: null,
      },
      category: 'scrollbar style',
      defaultValue: {
        summary: styleDefaultProps.barColor,
        details: null,
      },
    },
  },
}
