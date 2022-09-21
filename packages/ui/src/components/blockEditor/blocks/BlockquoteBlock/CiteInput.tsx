import { ChangeEvent, useContext } from 'react'
import { BlockEditorContext } from '../..'
import { UpdateAction } from '../../core/actions'
import { FloatLabelInput } from '../../reusable/FloatLabel/Input'

type CiteInputProps = {
  id: string
  value: string
}

export const CiteInput = ({ id, value }: CiteInputProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>) => {
    const action: UpdateAction<'blockquote'> = {
      type: 'UPDATE',
      args: {
        id,
        diff: {
          cite: e.target.value,
        },
      },
    }
    dispatch(action)
  }

  return (
    <FloatLabelInput id={id} label='source' onChange={updateFn} value={value} />
  )
}
