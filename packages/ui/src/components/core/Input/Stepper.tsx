import { useState, ChangeEvent } from 'react'
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'
import { InnerInputCommonProps } from '.'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'
import { Button } from '../Button'
import { NumberInputProps } from './model/props'

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
    <div>
      <Button
        aria-label='decrease'
        aria-describedby={labelId}
        onClick={onDecrement}
      >
        <CgMathMinus />
      </Button>
      <input
        type='number'
        {...props}
        ref={ref}
        id={inputId}
        value={count}
        onChange={onInput}
      />
      <Button
        aria-label='increase'
        aria-describedby={labelId}
        onClick={onIncrement}
      >
        <CgMathPlus />
      </Button>
      <VisuallyHidden role='status' aria-live='polite'>
        {count}
      </VisuallyHidden>
    </div>
  )
}
