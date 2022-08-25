import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  spaceV: {
    control: {
      type: 'number',
    },
    description:
      'Numerical value indicating the size of the gap between each item',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.spaceV,
        details: null,
      },
    },
  },
  spaceU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of spaceV',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.spaceU,
        details: null,
      },
    },
  },
  hideScrollBar: {
    control: {
      type: 'boolean',
    },
    description: 'Whether to hide scrollbars',
    table: {
      type: {
        summary: null,
      },
      category: 'scrollbar',
      defaultValue: {
        summary: defaultProps.hideScrollBar,
        details: null,
      },
    },
  },
  barHeightV: {
    control: {
      type: 'number',
    },
    description: 'Numeric value representing the height of the scrollbar area',
    table: {
      type: {
        summary: null,
      },
      category: 'scrollbar',
      defaultValue: {
        summary: defaultProps.barHeightV,
        details: null,
      },
    },
  },
  barHeightU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of barHeightV',
    table: {
      type: {
        summary: null,
      },
      category: 'scrollbar',
      defaultValue: {
        summary: defaultProps.barHeightU,
        details: null,
      },
    },
  },
  paddingV: {
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the size of the space between the four sides of the Slider and the child elements.',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.paddingV,
        details: null,
      },
    },
  },
  paddingU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of paddingV',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.paddingU,
        details: null,
      },
    },
  },
}
