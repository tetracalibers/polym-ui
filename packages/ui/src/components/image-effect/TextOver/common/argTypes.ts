import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
import { defaultTextOverImageProps } from './props'
const withDefaultAs = useSetDefaultAs(defaultTextOverImageProps)

export const textOverImageArgTypes = {
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
}
