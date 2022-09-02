import { useState, ChangeEvent } from 'react'
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'
import { InnerInputCommonProps } from '.'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'
import { NumberInputProps } from './model/props'
import {
  DecrementButton,
  IncrementButton,
  NumberInput,
  Root,
} from './styled/stepper'

type Props = InnerInputCommonProps &
  NumberInputProps & {
    labelId: string
    inputId: string
  }

export const Stepper = ({
  initNum,
  labelId,
  ref,
  inputId,
  ...props
}: Props) => {
  const [count, setCount] = useState<string>(initNum!.toString())
  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputNum = e.target.value
    setCount(inputNum)
  }
  const onDecrement = () => setCount((+count - 1).toString())
  const onIncrement = () => setCount((+count + 1).toString())

  return (
    <Root>
      <DecrementButton
        aria-label='decrease'
        aria-describedby={labelId}
        onClick={onDecrement}
      >
        <CgMathMinus />
      </DecrementButton>
      <NumberInput
        type='number'
        {...props}
        ref={ref}
        id={inputId}
        value={count}
        onChange={onInput}
      />
      <IncrementButton
        aria-label='increase'
        aria-describedby={labelId}
        onClick={onIncrement}
      >
        <CgMathPlus />
      </IncrementButton>
      <VisuallyHidden role='status' aria-live='polite'>
        {count}
      </VisuallyHidden>
    </Root>
  )
}
