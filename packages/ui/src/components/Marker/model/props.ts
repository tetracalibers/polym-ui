import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette as $ } from 'styled-utility-first'
import { CssStyle } from 'ts-typedef-helper'

const coreConf = {
  byAuthor: NotRequired<boolean>(true),
}

export type MarkerCoreProps = getPropType<typeof coreConf>
export const defaultMarkerCoreProps = {
  ...getDefaultProps<MarkerCoreProps>(coreConf),
}
