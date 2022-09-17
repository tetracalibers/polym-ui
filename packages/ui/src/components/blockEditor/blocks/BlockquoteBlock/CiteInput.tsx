import { ChangeEvent, useContext } from 'react'
import { BlockEditorContext } from '../..'
import { UpdateAction } from '../../module/reducer'
import { FloatLabelInput } from '../FloatLabelInput'

type CiteInputProps = {
  id: string
}

export const CiteInput = ({ id }: CiteInputProps) => {
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

  return <FloatLabelInput id={id} label='source' onChange={updateFn} />
}
