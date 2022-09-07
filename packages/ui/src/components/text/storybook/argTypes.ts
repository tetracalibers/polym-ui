import { ArgType } from '../../../doc/argTypes'
import {
  defaultTextBaseStyleProps,
  defaultTextGlowStyleProps,
  defaultTextSolidlineStyleProps,
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
  ...solidlineTextArgTypes,
}

export const glowTextArgTypes = {
  ...textArgTypes,
  ...ArgType.color(defaultTextGlowStyleProps),
  ...ArgType.duration(defaultTextGlowStyleProps),
}
