import { ArgType } from '../../../doc/argTypes'
import { defaultTextBaseStyleProps } from '../model/style'

export const textArgTypes = {
  ...ArgType.children('text'),
  ...ArgType.color(defaultTextBaseStyleProps),
  ...ArgType.fontSize(defaultTextBaseStyleProps),
  ...ArgType.lineHeight(defaultTextBaseStyleProps),
}
