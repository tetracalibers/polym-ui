import { getSelectTypeControlOption } from './css-props/browser'

export { getSelectTypeControlOption }

// テスト用（バンドル時はコメントアウト）
//import './css-props/use-fs'

export type ControlType = 'text' | 'color'

export const controlType = (type: ControlType) => {
  return {
    control: {
      type,
    },
  }
}
