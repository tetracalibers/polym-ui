import React, { ReactNode } from 'react'
import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'
import { defaultProps as textareaDefaultProps } from '../../TextArea/model/props'
import { TextAreaProps } from '../../TextArea'

const conf = {
  maxChars: Required<number>(-1),
  minChars: Required<number>(-1),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> &
  CommonProps &
  StyleProps &
  TextAreaProps
export const _defaultProps = {
  ...textareaDefaultProps,
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}