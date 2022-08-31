import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'

export type ChoiceItem = {
  value: string | number
  label?: string
}

const conf = {
  hasError: NotRequired<boolean>(false),
  name: Required<HTMLSelectElement['name']>(''),
  initialValue: NotRequired<ChoiceItem['value']>(),
  placeholder: NotRequired<string>('Please select'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & {
  choices: ChoiceItem[]
  onSelect: (selected?: ChoiceItem) => void
}

export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  choices: [],
  onSelect: () => {},
}
