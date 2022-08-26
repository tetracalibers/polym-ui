import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'
import { CssStyle } from 'ts-typedef-helper'

export type ChoiceItem = {
  value: string | number
  label?: string
}

const conf = {
  hasError: NotRequired<boolean>(false),
  name: Required<HTMLSelectElement['name']>(''),
  initialValue: NotRequired<ChoiceItem['value']>(),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> &
  CommonProps &
  StyleProps & {
    choices: ChoiceItem[]
    onSelect: (selected?: ChoiceItem) => void
  }

export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
  choices: [],
  onSelect: () => {},
}
