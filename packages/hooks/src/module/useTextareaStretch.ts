import { ChangeEventHandler, useState, useCallback, ChangeEvent } from 'react'

export const useTextareaStretch = ({
  minRows = 1,
  maxRows = 5000,
  lineHeight = 24,
  padding = 16,
  onChange,
}: {
  minRows?: number
  maxRows?: number
  lineHeight?: number
  padding?: number
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}) => {
  const [textareaRows, setTextareaRows] = useState(Math.min(minRows!, maxRows!))

  // 最大行数まで改行した時に高さが増える仕組み
  // 入力が変わったときにe.target.scrollHeightから現在表示している行数を把握
  // -> setTextareaで最大行数maxRowsを超えないように動的に変更
  const changeHeight = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const previewsRows = e.target.rows
      // 行数のリセット
      e.target.rows = minRows!
      // 現在の行数
      const currentRows = Math.floor(
        (e.target.scrollHeight - padding!) / lineHeight!
      )
      // 変化がなければ
      if (currentRows === previewsRows) {
        e.target.rows = currentRows
      }
      // 最大を超えたら
      if (currentRows >= maxRows!) {
        e.target.rows = maxRows!
        e.target.scrollTop = e.target.scrollHeight
      }
      // 最大を超えないように行数をセット
      setTextareaRows(Math.min(currentRows, maxRows))
      onChange && onChange(e)
    },
    [onChange, minRows, maxRows]
  )

  return [textareaRows, changeHeight] as const
}
