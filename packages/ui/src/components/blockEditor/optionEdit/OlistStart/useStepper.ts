import { ChangeEvent, ComponentPropsWithoutRef, useReducer } from 'react'
import { reducer, Store } from './stepper.reducer'
import { useNanoId } from '@polym/hooks'

type UseStepperArgs = {
  min?: number
  max?: number
  step?: number
  start?: number
}

export const useStepper = ({
  start = 0,
  step = 1,
  min,
  max,
}: UseStepperArgs) => {
  const initial: Store = {
    count: start,
    canIncrement: true,
    canDecrement: true,
    hasError: false,
  }
  const [state, dispatch] = useReducer(reducer, initial)
  const { canDecrement, canIncrement, count } = state

  const onDecrement = () => dispatch({ type: 'DECREMENT', args: { min, max } })
  const onIncrement = () => dispatch({ type: 'INCREMENT', args: { min, max } })
  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    dispatch({ type: 'INPUT', args: { min, max, value } })
  }

  const inputId = useNanoId()
  const labelId = `label_for__${inputId}`

  const decrementButtonAttrs: ComponentPropsWithoutRef<'button'> = {
    'aria-label': `decrease by ${step}`,
    'aria-describedby': labelId,
    onClick: onDecrement,
    disabled: !canDecrement,
  }

  const incrementButtonAttrs: ComponentPropsWithoutRef<'button'> = {
    'aria-label': `increase by ${step}`,
    'aria-describedby': labelId,
    onClick: onIncrement,
    disabled: !canIncrement,
  }

  const inputLabelAttrs: ComponentPropsWithoutRef<'label'> = {
    htmlFor: inputId,
    id: labelId,
  }

  const inputAttrs: ComponentPropsWithoutRef<'input'> = {
    type: 'number',
    id: inputId,
    value: count,
    onChange: onInput,
  }

  return {
    count,
    attr: {
      decrementButton: decrementButtonAttrs,
      incrementButton: incrementButtonAttrs,
      label: inputLabelAttrs,
      input: inputAttrs,
    },
  }
}
