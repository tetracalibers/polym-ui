import { commonDefaultProps, htmlTagType } from './props'

export const commmonArgTypes = {
  as: {
    control: {
      type: 'radio',
    },
    options: htmlTagType,
    description: 'Use the component as a link or a button',
    table: {
      category: 'Accessibility',
      subcategory: 'markup',
      type: {
        summary: null,
      },
      defaultValue: {
        summary: commonDefaultProps.as,
      },
    },
  },
}
