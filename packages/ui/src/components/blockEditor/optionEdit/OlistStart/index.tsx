import { Stepper } from './Stepper'

export type OListStartStepperProps = {
  id: string
  order: number
}

export const OListStartStepper = ({
  id,
  order = 1,
}: OListStartStepperProps) => {
  return <Stepper label='order start' min={1} step={1} start={order} />
}
