import _ from 'lodash'
import { ReactElement, ReactNode } from 'react'
import { TextAreaComponentProp } from '../common/polymorphic/fixedAs'
import { TextArea } from '../TextArea'
import { useCharCount } from './hooks/useCharCount'
import { CharacterProps, _defaultProps } from './model/props'
import { VerticalStack } from '@polym-ui/layout'

export type CharLimitedTextareaProps = TextAreaComponentProp<CharacterProps> & {
  renderCharCountLabel?: (
    currCharCount: number,
    maxChars?: number,
    minChars?: number
  ) => ReactNode
}

export type CharLimitedTextareaComponent = (
  props: CharLimitedTextareaProps
) => ReactElement | null

export const defaultProps = {
  ..._defaultProps,
  renderCharCountLabel: (
    currCharCount: number,
    _maxChars?: number,
    _minChars?: number
  ) => <span>{currCharCount} characters now</span>,
}

export const CharLimitedTextarea: CharLimitedTextareaComponent = ({
  children,
  ..._props
}: CharLimitedTextareaProps) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  // prettier-ignore
  const { onChange, minChars, maxChars, renderCharCountLabel } = props
  // prettier-ignore
  const [count, updateCount] = useCharCount(minChars, maxChars, onChange)

  return (
    <VerticalStack spaceV={0.5}>
      <TextArea {...props} onChange={updateCount}>
        {children}
      </TextArea>
      <div role='status' aria-live='polite'>
        {renderCharCountLabel(count, maxChars, minChars)}
      </div>
    </VerticalStack>
  )
}
