import styled from 'styled-components'
import { IconOnly } from '../../../core/IconOnly'
import { useStepper } from './useStepper'
import { ResetCss } from 'styled-utility-first'
import { NumberInput } from '../../../core/Input/styled/stepper'
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'
import { VisuallyHidden } from '../../../a11y-helper/VisuallyHidden'
import { editInputStyle } from '../../styled/editInput'
import { ChangeEvent, useEffect } from 'react'

const Root = styled.div`
  --float-color: #8c1bab;
  --gap: 0.5rem;
  --icon-size: 2rem;
  --icon-color: cadetblue;

  display: flex;
  align-items: center;
`

const IconButton = styled(IconOnly.Button)`
  ${ResetCss.button}
  color: #7d8188;

  box-shadow: inset 14px 0px 5px -10px rgb(255 255 255 / 20%),
    inset 13px 0px 2px -10px rgb(255 255 255 / 20%),
    inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
    inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
    inset -20px 10px 5px -20px rgb(255 255 255 / 30%),
    inset -20px 15px 10px -20px rgb(255 255 255 / 20%),
    inset 0px 20px 30px -5px rgb(255 255 255 / 30%),
    0px 2px 1px -1px rgb(245 225 183 / 80%);

  height: var(--icon-size);
  border-radius: 50%;
  padding-left: var(--gap);
  padding-right: var(--gap);
  box-sizing: border-box;
  text-align: center;

  &[disabled] {
    background: none;
    color: #b0bec5;
  }

  & svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }
`

const DecrementButton = styled(IconButton).attrs({
  icon: <CgMathMinus />,
})`
  margin-right: var(--gap);
  background-image: linear-gradient(
    135deg,
    rgba(42, 250, 223, 1) 10%,
    rgba(76, 131, 255, 1) 100%
  );
`

const IncrementButton = styled(IconButton).attrs({
  icon: <CgMathPlus />,
})`
  margin-left: var(--gap);
  background-image: linear-gradient(
    135deg,
    rgba(255, 150, 249, 1) 10%,
    rgba(195, 43, 172, 1) 100%
  );
`

const FloatLabelContainer = styled.div``

const Input = styled(NumberInput)`
  ${editInputStyle}
  margin: 0;
  padding: 1.8rem 1rem 0.6rem;
  font-size: 1rem;
  width: 100%;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

  &:focus {
    outline: none;
  }

  &[data-has-error='true'] {
    border: 2px solid #ff0f6d;
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
  width: 100%;

  &::before {
    color: var(--color);
    content: attr(data-label);
    display: inline-block;
    filter: blur(0);
    backface-visibility: hidden;
    transition: transform 0.2s ease;
    position: relative;
    padding-left: var(--gap);
    padding-right: var(--gap);
  }

  ${Input}:placeholder-shown + &::before {
    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
  }

  &::before,
  ${Input}:focus + &::before {
    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
  }

  /* focus時と入力済みの場合 */
  ${Input}:focus + &::before,
  ${Input}:not(:placeholder-shown) + &::before {
    color: var(--float-color);
  }
`

export type StepperProps = {
  min?: number
  max?: number
  step?: number
  start?: number
  label: string
  onChange?: (value: number) => void
}

export const Stepper = ({
  min,
  max,
  step = 1,
  start = 0,
  label,
  onChange,
}: StepperProps) => {
  const { count, attr, hasError } = useStepper({ min, max, step, start })

  const { 'aria-label': decreLabel, ...decreAttrs } = attr.decrementButton
  const { 'aria-label': increLabel, ...increAttrs } = attr.incrementButton

  useEffect(() => {
    if (hasError) {
      return
    }
    onChange && onChange(count)
  }, [count, hasError])

  return (
    <Root>
      <DecrementButton label={decreLabel!} {...decreAttrs} />
      <FloatLabelContainer>
        <Input {...attr.input} placeholder={label} data-has-error={hasError} />
        <Label {...attr.label} data-label={label}>
          <VisuallyHidden>{label}</VisuallyHidden>
        </Label>
      </FloatLabelContainer>
      <IncrementButton label={increLabel!} {...increAttrs} />
      <VisuallyHidden role='status' aria-live='polite'>
        {count}
      </VisuallyHidden>
    </Root>
  )
}
