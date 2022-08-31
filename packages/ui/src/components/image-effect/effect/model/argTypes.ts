import { CssStyle } from 'ts-typedef-helper'
import { useSetDefaultAs } from 'story-builder'
import { defaultEffectProps, triggerOptions } from './props'
const withDefaultAs = useSetDefaultAs(defaultEffectProps)

export const effectArgTypes = {
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
        summary: defaultEffectProps.trigger,
        details: null,
      },
    },
  },
  duration: {
    ...withDefaultAs('transitionDuration'),
    table: {
      ...withDefaultAs('transitionDuration').table,
      defaultValue: {
        summary: defaultEffectProps.duration,
        details: null,
      },
    },
  },
}
