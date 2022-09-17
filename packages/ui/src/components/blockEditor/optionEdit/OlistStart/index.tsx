import { useContext } from 'react'
import { BlockEditorContext } from '../..'
import { UpdateAction } from '../../module/reducer'
import { Stepper } from './Stepper'

export type OListStartStepperProps = {
  id: string
  order: number
}

export const OListStartStepper = ({
  id,
  order = 1,
}: OListStartStepperProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (value: number) => {
    const action: UpdateAction<'olist'> = {
      type: 'UPDATE',
      args: { id, diff: { order: value } },
    }
    dispatch(action)
  }

  return (
    <Stepper
      label='order start'
      min={1}
      step={1}
      start={order}
      onChange={updateFn}
    />
  )
}
