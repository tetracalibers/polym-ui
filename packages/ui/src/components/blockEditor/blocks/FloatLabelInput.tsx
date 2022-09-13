import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'

export type FloatLabelInputProps = {
  id: string
  label: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'id' | 'placeholder'>

const Wrapper = styled.div`
  --color: #4d608b;
  --bg-color: rgba(255, 255, 255, 0.25);
  --bg-color__hover: rgba(255, 255, 255, 0.75);
  --float-color: #8c1bab;
  --border-color: #ce9ffc;
  --border-radius: 1.5em;

  background-color: var(--bg-color);
  backdrop-filter: blur(4px);
  border-radius: var(--border-radius);
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: box-shadow 0.2s ease;

  &:hover,
  &:focus-within {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }

  &:focus-within {
    border: 1.5px solid var(--border-color);
    margin: -1.5px;
    background-color: rgba(255, 255, 255, 0);
  }
`

const Input = styled.input`
  background-color: var(--bg-color);
  backdrop-filter: blur(4px);
  border-radius: var(--border-radius);
  border: none;
  display: block;
  width: 100%;
  appearance: none;
  box-sizing: border-box;
  outline: none;

  padding: 1.8rem 1rem 0.6rem;
  font-size: 1rem;
  caret-color: var(--color);

  &:focus {
    background-color: var(--bg-color__hover);
  }

  /* 表示状態を検知するために透明にして残しておく */
  &::placeholder {
    color: rgba(255, 255, 255, 0);
  }
`

const Label = styled.label`
  display: block;
  position: relative;
  max-height: 0;
  pointer-events: none;

  &::before {
    color: var(--color);
    content: attr(data-label);
    display: inline-block;
    filter: blur(0);
    backface-visibility: hidden;
    transform-origin: left top;
    transition: transform 0.2s ease;
    left: 1rem;
    position: relative;
  }

  ${Input}:placeholder-shown + &::before {
    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
  }

  &::before,
  ${Input}:focus + &::before {
    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
  }

  ${Input}:focus + &::before {
    color: var(--float-color);
  }
`

export const FloatLabelInput = ({
  id,
  label,
  ...inputProps
}: FloatLabelInputProps) => {
  return (
    <Wrapper>
      {/* inputとlabelの順序を変えるとラベルが表示されないぞ */}
      <Input id={id} placeholder={label} {...inputProps} />
      <Label htmlFor={id} data-label={label}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </Label>
    </Wrapper>
  )
}
