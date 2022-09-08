import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette as $ } from 'styled-utility-first'
import { CssStyle } from 'ts-typedef-helper'

/* as from ------------------------------------ */

export const appearFromOptions = ['bottom', 'right'] as const
type AppearFromOptions = typeof appearFromOptions[number]

const asFromConf = {
  /* feature */
  startHeight: NotRequired<number>(50),
  /* animation */
  appearFrom: NotRequired<AppearFromOptions>('bottom'),
}

export type AsFromProps = getPropType<typeof asFromConf>
export const defaultAsFromProps = {
  ...getDefaultProps<AsFromProps>(asFromConf),
}
