import { defaultIconOnlyProps } from './props'
import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
import { defaultButtonCoreProps } from '../../Button/model/props'
const withDefaultAs = useSetDefaultAs(defaultIconOnlyProps)
import _ from 'lodash'
import { buttonArgTypes } from '../../Button/storybook/button/argTypes'

export const iconOnlyCoreArgTypes = {
  ..._.omit(buttonArgTypes, 'children'),
  label: {
    control: {
      type: 'text',
    },
    description: 'Text explaining what the button is for instead of an icon',
    table: {
      category: 'accessibility',
      type: {
        summary: null,
      },
    },
    type: {
      required: true,
    },
  },
  icon: {
    control: {
      type: null,
    },
    description: 'Icon to be displayed as a button',
    table: {
      category: 'appearance',
      type: {
        summary: 'ReactElement',
      },
    },
    type: {
      required: true,
    },
  },
}
