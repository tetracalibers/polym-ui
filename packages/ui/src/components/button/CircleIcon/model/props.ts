import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette as $, ResetCss } from 'styled-utility-first'
import { CssStyle } from 'ts-typedef-helper'
import { defaultIconOnlyProps } from '../../../core/IconOnly/model/props'
import { IconOnlyCoreProps } from '../../../core/IconOnly'

const conf = {
  label: Required<string>(),
}

export type CharacterProps = getPropType<typeof conf> & IconOnlyCoreProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...defaultIconOnlyProps,
}
