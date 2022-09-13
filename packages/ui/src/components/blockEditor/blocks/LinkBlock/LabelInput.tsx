import { ChangeEvent, useContext } from 'react'
import { BlockEditorContext } from '../..'
import { UpdateAction } from '../../module/reducer'
import { FloatLabelInput } from '../FloatLabelInput'

type LabelInputProps = {
  id: string
}

export const LabelInput = ({ id }: LabelInputProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>) => {
    const action: UpdateAction<'link'> = {
      type: 'UPDATE',
      args: {
        key: id,
        diff: {
          label: e.target.value,
        },
      },
    }
    dispatch(action)
  }

  return <FloatLabelInput id={id} label='display text' onChange={updateFn} />
}
