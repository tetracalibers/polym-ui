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
  bgDuration: {
    ...withDefaultAs('transitionDuration'),
    description: 'Time required to animate the background',
    table: {
      ...withDefaultAs('transitionDuration').table,
      defaultValue: {
        summary: defaultTextOverImageProps.bgDuration,
        details: null,
      },
      category: 'effect',
      subcategory: 'animation',
    },
  },
  txtDuration: {
    ...withDefaultAs('transitionDuration'),
    description: 'Time it takes for text above the image to appear',
    table: {
      ...withDefaultAs('transitionDuration').table,
      defaultValue: {
        summary: defaultTextOverImageProps.txtDuration,
        details: null,
      },
      category: 'effect',
      subcategory: 'animation',
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
  imgPaddingV: {
    control: {
      type: 'number',
    },
    description:
      'Numeric value representing the size of the gap between the edge of the image and the edge of the background',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultTextOverImageProps.imgPaddingV,
        details: null,
      },
    },
  },
  imgPaddingU: {
    control: {
      type: 'select',
    },
    options: CssStyle.Unit.length,
    description: 'Units of imgPaddingV',
    table: {
      ...withDefaultAs('padding').table,
      defaultValue: {
        summary: defaultTextOverImageProps.imgPaddingU,
        details: null,
      },
    },
  },
}
