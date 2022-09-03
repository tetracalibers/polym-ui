import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette as $, ResetCss } from 'styled-utility-first'
import { CssStyle } from 'ts-typedef-helper'
import { ChangeEvent, SyntheticEvent } from 'react'

const conf = {
  value: NotRequired<number>(0),
  max: NotRequired<number>(5),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & {
  onClick?: (e: SyntheticEvent, i: number) => void
}

export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  onClick: undefined,
}
