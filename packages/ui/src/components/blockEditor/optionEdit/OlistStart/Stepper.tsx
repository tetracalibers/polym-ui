import styled from 'styled-components'
import { IconOnly } from '../../../core/IconOnly'
import { useStepper } from './useStepper'
import { ResetCss } from 'styled-utility-first'
import { NumberInput } from '../../../core/Input/styled/stepper'
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'
import { VisuallyHidden } from '../../../a11y-helper/VisuallyHidden'
import { editInputStyle } from '../../styled/editInput'

const Root = styled.div`
  display: flex;
`

const IconButton = styled(IconOnly.Button)`
  ${ResetCss.button}
`

const DecrementButton = styled(IconButton).attrs({
  icon: <CgMathMinus />,
})``

const IncrementButton = styled(IconButton).attrs({
  icon: <CgMathPlus />,
})``

const FloatLabelContainer = styled.div``

const Input = styled(NumberInput)`
  ${editInputStyle}
  margin: 0;
  padding: 1.8rem 1rem 0.6rem;
  font-size: 1rem;

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
    transform-origin: left top;
    transition: transform 0.2s ease;
    position: relative;
    left: calc(-1.5 * var(--gap));
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
}

export const Stepper = ({
  min,
  max,
  step = 1,
  start = 0,
  label,
}: StepperProps) => {
  const { count, attr } = useStepper({ min, max, step, start })

  const { 'aria-label': decreLabel, ...decreAttrs } = attr.decrementButton
  const { 'aria-label': increLabel, ...increAttrs } = attr.incrementButton

  return (
    <Root>
      <DecrementButton label={decreLabel!} {...decreAttrs} />
      <FloatLabelContainer>
        <Input {...attr.input} placeholder={label} />
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
