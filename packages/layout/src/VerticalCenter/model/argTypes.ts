import { defaultProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const logicArgTypes = {
  central: {
    control: {
      type: 'number',
    },
    description:
      'A number indicating how many of the child elements the element to be vertically centered is, or the tag name or component name of the element',
    table: {
      type: {
        summary: 'number | HTMLtagName(string) | Component',
      },
      category: 'character',
      defaultValue: {
        summary: defaultProps.central,
        details: null,
      },
    },
  },
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
  minHeightV: {
    control: {
      type: 'number',
    },
    description:
      'A number representing the minimum height of the entire component',
    table: {
      type: {
        summary: null,
      },
      category: 'style control',
      defaultValue: {
        summary: defaultProps.minHeightV,
        details: null,
      },
    },
  },
  minHeightU: {
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
        summary: defaultProps.minHeightU,
        details: null,
      },
    },
  },
}
