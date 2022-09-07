import { ArgType } from '../../../doc/argTypes'
import {
  defaultTextBaseStyleProps,
  defaultTextGlowStyleProps,
} from '../model/style'

export const textArgTypes = {
  ...ArgType.children('text'),
  ...ArgType.color(defaultTextBaseStyleProps),
  ...ArgType.fontSize(defaultTextBaseStyleProps),
  ...ArgType.lineHeight(defaultTextBaseStyleProps),
}

export const glowTextArgTypes = {
  ...ArgType.children('text'),
  ...ArgType.color(defaultTextGlowStyleProps),
  ...ArgType.fontSize(defaultTextGlowStyleProps),
  ...ArgType.lineHeight(defaultTextGlowStyleProps),
  ...ArgType.duration(defaultTextGlowStyleProps),
}
