import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  borderWidth: {
    ...withDefaultAs('borderWidth'),
    description: 'Thickness of radio button borders (px)',
    control: {
      type: 'number',
    },
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      subcategory: 'border',
      defaultValue: {
        summary: styleDefaultProps.borderWidth,
        details: null,
      },
    },
  },
  borderColor: {
    ...withDefaultAs('borderColor'),
    description: 'Color of radio button borders',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      subcategory: 'border',
      defaultValue: {
        summary: styleDefaultProps.borderColor,
        details: null,
      },
    },
  },
  focusOutlineWidth: {
    ...withDefaultAs('outlineWidth'),
    description: 'Thickness of outline at focus (px)',
    control: {
      type: 'number',
    },
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      subcategory: 'outline',
      defaultValue: {
        summary: styleDefaultProps.focusOutlineWidth,
        details: null,
      },
    },
  },
  focusOutlineColor: {
    ...withDefaultAs('outlineColor'),
    description: 'Color of outline at focus',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      subcategory: 'outline',
      defaultValue: {
        summary: styleDefaultProps.focusOutlineColor,
        details: null,
      },
    },
  },
  checkIconColor: {
    ...withDefaultAs('color'),
    description: 'Color of circle mark when checked',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      subcategory: 'icon',
      defaultValue: {
        summary: styleDefaultProps.checkIconColor,
        details: null,
      },
    },
  },
}
