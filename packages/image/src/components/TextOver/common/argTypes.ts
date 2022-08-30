import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
import { defaultTextOverImageProps, triggerOptions } from './props'
const withDefaultAs = useSetDefaultAs(defaultTextOverImageProps)

export const textOverImageArgTypes = {
  trigger: {
    control: {
      type: 'radio',
    },
    options: triggerOptions,
    description:
      'Which action activates the effect. (Setting "none" always activates the effect.)',
    table: {
      type: {
        summary: null,
      },
      category: 'effect',
      defaultValue: {
        summary: defaultTextOverImageProps.trigger,
        details: null,
      },
    },
  },
  aboveText: {
    control: {
      type: 'text',
    },
    description:
      'Text string to be displayed over the image, or React element that wraps the text',
    table: {
      type: {
        summary:
          'e.g. "Sapmle text" | <span>Sample text</span> | <YourComponent>Sample text</YourComponent>',
      },
      category: 'contents',
      defaultValue: {
        summary: defaultTextOverImageProps.aboveText,
        details: null,
      },
    },
  },
  bgColor: {
    ...withDefaultAs('backgroundColor'),
    description: 'color overlaid on an image',
    table: {
      ...withDefaultAs('backgroundColor').table,
      defaultValue: {
        summary: defaultTextOverImageProps.bgColor,
        details: null,
      },
    },
  },
}
