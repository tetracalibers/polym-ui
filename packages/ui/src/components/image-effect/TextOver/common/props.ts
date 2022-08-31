import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { CssStyle } from 'ts-typedef-helper'
import * as CSST from 'csstype'
import { ReactNode } from 'react'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const conf = {}
type Conf = typeof conf

export type TextOverImageProps = getPropType<Conf> & {
  aboveText: ReactNode
}

export const defaultTextOverImageProps = {
  ...getDefaultProps<TextOverImageProps>(conf),
  aboveText: '',
}
