import { ArgType } from '../../../doc/argTypes'
import {
  defaultTextBaseStyleProps,
  defaultTextCloudStyleProps,
  defaultTextDashedLineStyleProps,
  defaultTextFireStyleProps,
  defaultTextGlowStyleProps,
  defaultTextSolidlineStyleProps,
  defaultTextWavyLineStyleProps,
  triggerOptions,
} from '../model/style'

export const textArgTypes = {
  ...ArgType.children('text'),
  ...ArgType.color(defaultTextBaseStyleProps),
  ...ArgType.fontSize(defaultTextBaseStyleProps),
  ...ArgType.lineHeight(defaultTextBaseStyleProps),
}

export const solidlineTextArgTypes = {
  ...textArgTypes,
  ...ArgType.lineColor(defaultTextSolidlineStyleProps, {
    subcategory: 'Text Decoration',
  }),
  ...ArgType.bgColor(defaultTextSolidlineStyleProps),
  ...ArgType.underOffset(defaultTextSolidlineStyleProps),
  ...ArgType.thickness(defaultTextSolidlineStyleProps, {
    subcategory: 'Text Decoration',
  }),
}

export const dashedlineTextArgTypes = {
  ...textArgTypes,
  ...ArgType.lineColor(defaultTextDashedLineStyleProps, {
    subcategory: 'Text Decoration',
  }),
  ...ArgType.bgColor(defaultTextDashedLineStyleProps),
  ...ArgType.underOffset(defaultTextDashedLineStyleProps),
  ...ArgType.thickness(defaultTextDashedLineStyleProps, {
    subcategory: 'Text Decoration',
  }),
}

export const wavylineTextArgTypes = {
  ...textArgTypes,
  ...ArgType.lineColor(defaultTextWavyLineStyleProps, {
    subcategory: 'Text Decoration',
  }),
  ...ArgType.bgColor(defaultTextWavyLineStyleProps),
  ...ArgType.underOffset(defaultTextWavyLineStyleProps),
}

export const glowTextArgTypes = {
  ...textArgTypes,
  ...ArgType.color(defaultTextGlowStyleProps),
  ...ArgType.duration(defaultTextGlowStyleProps),
  ...ArgType.trigger(defaultTextGlowStyleProps, triggerOptions),
}

export const cloudTextArgTypes = {
  ...textArgTypes,
  ...ArgType.color(defaultTextCloudStyleProps),
}

export const fireTextArgTypes = {
  ...textArgTypes,
  ...ArgType.color(defaultTextFireStyleProps),
  ...ArgType.duration(defaultTextFireStyleProps),
  ...ArgType.trigger(defaultTextFireStyleProps, triggerOptions),
}
