import { ChangeEvent, useContext } from 'react'
import { BlockEditorContext } from '../..'
import { UpdateAction } from '../../core/actions'
import { FloatLabelInput } from '../../reusable/FloatLabel/FloatLabelInput'

type LabelInputProps = {
  id: string
  value: string
}

export const LabelInput = ({ id, value }: LabelInputProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>) => {
    const action: UpdateAction<'link'> = {
      type: 'UPDATE',
      args: {
        id,
        diff: {
          label: e.target.value,
        },
      },
    }
    dispatch(action)
  }

  return (
    <FloatLabelInput
      id={id}
      label='display text'
      onChange={updateFn}
      value={value ?? ''}
    />
  )
}
