import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { useStretchableTextArea } from './hooks/useStretchableTextArea'
import { CharacterProps, defaultProps } from './model/props'
import { StyledLabel, StyledTextarea } from './styled'
import { TextAreaComponentPropWithRef } from '../../../types/polymorphic/fixedAs'
import { PolymorphicRef } from '../../../types/polymorphic/standard'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'

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
    // prettier-ignore
    const { onChange, minRows, maxRows, lineHeight, placeholder, name, id, ...other } = props
    // prettier-ignore
    const [textareaRows, changeHeight] = useStretchableTextArea(minRows!, maxRows!, lineHeight!, onChange)

    return (
      <VerticalStack spaceV={0.5}>
        <StyledLabel htmlFor={id ?? name}>{children}</StyledLabel>
        <StyledTextarea
          {...props}
          ref={ref}
          onChange={changeHeight}
          aria-label={placeholder}
          rows={textareaRows}
          name={name}
          id={id ?? name}
        />
      </VerticalStack>
    )
  }
)
