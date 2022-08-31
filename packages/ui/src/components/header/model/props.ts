import {
  getDefaultProps,
  getPropType,
  NotRequired,
  Required,
} from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'
import * as CSST from 'csstype'

const conf = {}
type Conf = typeof conf

export type CommonProps = getPropType<Conf>
export const commonDefaultProps = getDefaultProps<CommonProps>(conf)
