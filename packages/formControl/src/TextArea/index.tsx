import _ from 'lodash'
import {
  ChangeEvent,
  forwardRef,
  ReactElement,
  useCallback,
  useState,
} from 'react'
import { TextAreaComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledTextarea } from './styled'

export type TextAreaProps = TextAreaComponentPropWithRef<CharacterProps>

export type TextAreaComponent = (props: TextAreaProps) => ReactElement | null

export const TextArea: TextAreaComponent = forwardRef(
  (
    { children, ..._props }: TextAreaProps,
    ref?: PolymorphicRef<'textarea'>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    const {
      onChange,
      minRows,
      maxRows,
      lineHeight,
      placeholder,
      name,
      id,
      ...other
    } = props

    const [textareaRows, setTextareaRows] = useState(
      Math.min(minRows!, maxRows!)
    )

    // 最大行数まで改行した時に高さが増える仕組み
    // 入力が変わったときにe.target.scrollHeightから現在表示している行数を把握
    // -> setTextareaで最大行数maxRowsを超えないように動的に変更
    const changeHeight = useCallback(
      (e: ChangeEvent<HTMLTextAreaElement>) => {
        const previewsRows = e.target.rows
        // 行数のリセット
        e.target.rows = minRows!
        // 現在の行数
        const currentRows = Math.floor(e.target.scrollHeight / lineHeight!)
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
        setTextareaRows(Math.min(currentRows, maxRows!))
        onChange && onChange(e)
      },
      [onChange, minRows, maxRows]
    )

    return (
      <>
        <label htmlFor={id ?? name}> {children}</label>
        <StyledTextarea
          {...props}
          ref={ref}
          onChange={changeHeight}
          aria-label={placeholder}
          rows={textareaRows}
          name={name}
          id={id ?? name}
        />
      </>
    )
  }
)
