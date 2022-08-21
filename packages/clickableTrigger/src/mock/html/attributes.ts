/* [REFERENCE] HTML解体新書 p238~239 -------------- */

import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'

export const htmlAttr = {
  type: NotRequired<'reset' | 'submit' | 'button'>('submit'),
  name: NotRequired<unknown>(),
  value: NotRequired<unknown>(),
}

export const waiariaAttr = {
  // デフォルトではラベルなしのボタンは「ボタン」と読み上げられるだけ
  role: NotRequired<string>('button'),
}
