import { useSetDefaultAs } from 'story-builder'
import { styleDefaultProps } from './props'
import { styleArgTypes as textareaArgTypes } from '../../TextArea/css-props/argTypes'

const withDefaultAs = useSetDefaultAs(styleDefaultProps)

export const styleArgTypes = {
  ...textareaArgTypes,
}
