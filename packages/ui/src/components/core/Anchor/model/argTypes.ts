import { defaultAnchorCoreProps } from './props'
import { CssStyle } from 'ts-typedef-helper'

export const coreArgTypes = {
  href: {
    control: {
      type: 'text',
    },
    description: 'URL or path to navigate to when clicking',
    table: {
      category: 'html',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultAnchorCoreProps.href,
      },
    },
    type: {
      required: true,
    },
  },
  children: {
    control: {
      type: null,
    },
    description: 'Elements you want to function as links',
    table: {
      category: 'react',
      type: {
        summary: null,
      },
    },
    type: {
      required: true,
    },
  },
  openInNewTab: {
    control: {
      type: 'boolean',
    },
    description: 'Whether to open the link in a new tab',
    table: {
      category: 'feature',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: defaultAnchorCoreProps.openInNewTab,
      },
    },
  },
}
