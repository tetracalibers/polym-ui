import { CssStyle } from 'ts-typedef-helper'
import { defaultLinkListCoreProps, styleTypeOptions } from './props'

export const coreArgTypes = {
  styleType: {
    control: {
      type: 'radio',
    },
    options: styleTypeOptions,
    description: '',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      defaultValue: {
        summary: defaultLinkListCoreProps.styleType,
        details: null,
      },
    },
  },
}
