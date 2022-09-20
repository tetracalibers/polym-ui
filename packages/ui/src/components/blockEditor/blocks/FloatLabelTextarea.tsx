import { ChangeEvent, ComponentPropsWithoutRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import { useTextareaStretch, useNanoId } from '@polym/hooks'
import { BlockEditorContext } from '..'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'
import { StretchTextArea } from './LongTextBlock'

const FloatLabelContainer = styled.div``

const Textarea = styled(StretchTextArea)`
  font-size: 16px;
  padding: 1.8rem 1rem 0.6rem;

  /* 表示状態を検知するために透明にして残しておく */
  &::placeholder {
    color: rgba(255, 255, 255, 0);
  }

  & + label::before {
    color: var(--color);
    content: attr(data-label);
    display: inline-block;
    filter: blur(0);
    backface-visibility: hidden;
    transform-origin: left top;
    transition: transform 0.2s ease;
    position: relative;
    vertical-align: middle;
    left: 1rem;
    ${({ rows }) => {
      return css`
        top: calc(-1 * (24px * ${rows} - 1rem));
      `
    }}
  }
`

const Label = styled.label`
  --float-color: #8c1bab;
  --color: #4d608b;

  display: block;
  position: relative;
  max-height: 0;
  pointer-events: none;
  width: 100%;

  ${Textarea}:placeholder-shown + &::before {
    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
  }

  &::before,
  ${Textarea}:focus + &::before {
    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
  }

  /* focus時と入力済みの場合 */
  ${Textarea}:focus + &::before,
  ${Textarea}:not(:placeholder-shown) + &::before {
    color: var(--float-color);
  }
`

export type FloatLabelTextareaProps = {
  id: string
  label: string
} & ComponentPropsWithoutRef<'textarea'>

export const FloatLabelTextarea = ({
  id,
  label,
  ...textareaProps
}: FloatLabelTextareaProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({
      type: 'UPDATE',
      args: { id, diff: { input: e.target.value } },
    })

  const [rows, updateState] = useTextareaStretch({
    onChange: updateFn,
  })

  const inputId = useNanoId()

  return (
    <FloatLabelContainer>
      <Textarea
        onChange={updateState}
        rows={rows}
        id={inputId}
        placeholder={label}
        {...textareaProps}
      />
      <Label htmlFor={inputId} data-label={label}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </Label>
    </FloatLabelContainer>
  )
}
