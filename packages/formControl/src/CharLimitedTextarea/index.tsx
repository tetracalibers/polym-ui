import _ from 'lodash'
import {
  ChangeEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useState,
} from 'react'
import { TextAreaComponentProp } from '../common/polymorphic/fixedAs'
import { TextArea } from '../TextArea'
import { CharacterProps, _defaultProps } from './model/props'

export type CharLimitedTextareaProps = TextAreaComponentProp<CharacterProps> & {
  renderCharCountLabel: (
    currCharCount: number,
    maxChars: number,
    minChars: number
  ) => ReactNode
}

export type CharLimitedTextareaComponent = (
  props: CharLimitedTextareaProps
) => ReactElement | null

export const defaultProps = {
  ..._defaultProps,
  renderCharCountLabel: (
    currCharCount: number,
    _maxChars: number,
    _minChars: number
  ) => <span>{currCharCount} characters now</span>,
}

export const CharLimitedTextarea: CharLimitedTextareaComponent = ({
  ..._props
}: CharLimitedTextareaProps) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  const { onChange, minChars, maxChars, renderCharCountLabel } = props

  const [count, setCount] = useState(0)

  const updateCount = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setCount(e.target.value.length)
      onChange && onChange(e)
    },
    [onChange, minChars, maxChars]
  )

  return (
    <>
      <TextArea {...props} onChange={updateCount} />
      <div role='status' aria-live='polite'>
        {renderCharCountLabel(count, maxChars, minChars)}
      </div>
    </>
  )
}
