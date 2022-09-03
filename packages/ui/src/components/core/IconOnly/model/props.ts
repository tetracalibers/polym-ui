import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette as $, ResetCss } from 'styled-utility-first'
import { CssStyle } from 'ts-typedef-helper'

const conf = {
  label: Required<string>(),
}

export type CharacterProps = getPropType<typeof conf>
export const defaultIconOnlyProps = {
  ...getDefaultProps<CharacterProps>(conf),
}
