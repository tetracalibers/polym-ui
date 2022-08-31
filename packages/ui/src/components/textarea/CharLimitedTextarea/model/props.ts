import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import { defaultProps as textareaDefaultProps } from '../../core/model/props'
import { TextAreaProps } from '../../core'

const conf = {
  maxChars: NotRequired<number>(-1),
  minChars: NotRequired<number>(-1),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & TextAreaProps
export const _defaultProps = {
  ...textareaDefaultProps,
  ...getDefaultProps<CharacterProps>(conf),
}
