import _ from 'lodash'
import {
  borderLinkListArgTypes,
  fillLinkListArgTypes,
  underlineLinkListArgTypes,
} from './../../LinkList/storybook/argTypes'

export const coreTabArgTypes = {
  titleStyleFn: {
    control: {
      type: null,
    },
    description: '',
    table: {
      type: {
        summary: '(title: string) => ReactElement',
      },
      category: 'custum style',
    },
  },
  titleTabListTheme: {
    control: {
      type: null,
    },
    description: '',
    table: {
      type: {
        summary: 'Fill | Border | Underline',
      },
      category: 'custum style',
    },
  },
}

const NotInherited = ['initialActiveNth']

export const underlineTabArgTypes = {
  ...coreTabArgTypes,
  ..._.omit(underlineLinkListArgTypes, NotInherited),
}

export const borderTabArgTypes = {
  ...coreTabArgTypes,
  ..._.omit(borderLinkListArgTypes, NotInherited),
}

export const fillTabArgTypes = {
  ...coreTabArgTypes,
  ..._.omit(fillLinkListArgTypes, NotInherited),
}
