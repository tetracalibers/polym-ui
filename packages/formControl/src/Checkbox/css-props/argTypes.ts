import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  borderWidth: {
    ...withDefaultAs('borderWidth'),
    description: 'Thickness of checkbox borders (px)',
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
    description: 'Color of checkbox borders',
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
  borderRadius: {
    ...withDefaultAs('borderRadius'),
    description: 'Rounded corners of checkbox (px)',
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
        summary: styleDefaultProps.borderRadius,
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
}
