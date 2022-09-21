import { ChangeEvent, useContext } from 'react'
import { BlockEditorContext } from '../..'
import { UpdateAction } from '../../core/actions'
import { FloatLabelInput } from '../../reusable/FloatLabel/FloatLabelInput'

type LabelInputProps = {
  id: string
  value: string
}

export const CaptionInput = ({ id, value }: LabelInputProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>) => {
    const action: UpdateAction<'image'> = {
      type: 'UPDATE',
      args: {
        id,
        diff: {
          caption: e.target.value,
        },
      },
    }
    dispatch(action)
  }

  return (
    <FloatLabelInput
      id={id}
      label='image caption'
      onChange={updateFn}
      value={value ?? ''}
    />
  )
}
