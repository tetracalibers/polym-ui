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

export const triggerOptions = ['hover', 'none'] as const
export type TriggerOptions = typeof triggerOptions[number]

const conf = {
  trigger: NotRequired<TriggerOptions>('hover'),
  bgDuration: NotRequired<number>(0.3),
  txtDuration: NotRequired<number>(0.5),
  imgPaddingV: NotRequired<number>(1.5),
  imgPaddingU: NotRequired<CssStyle.Unit.Length>('rem'),
  bgColor: NotRequired<CSST.Property.BackgroundColor>($.grayScale.dark),
  bgOpacity: NotRequired<number>(0.7),
}
type Conf = typeof conf

export type TextOverImageProps = getPropType<Conf> & {
  aboveText: ReactNode
}

export const defaultTextOverImageProps = {
  ...getDefaultProps<TextOverImageProps>(conf),
  aboveText: '',
}