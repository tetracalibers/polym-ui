import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
import { defaultEffectProps, triggerOptions } from './props'
const withDefaultAs = useSetDefaultAs(defaultEffectProps)

export const effectArgTypes = {
  duration: {
    ...withDefaultAs('animationDuration'),
    table: {
      ...withDefaultAs('animationDuration').table,
      defaultValue: {
        summary: defaultEffectProps.duration,
        details: null,
      },
    },
  },
}
