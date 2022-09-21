import { ChangeEvent, useContext } from 'react'
import { BlockEditorContext } from '../..'
import { UpdateAction } from '../../core/actions'
import { FloatLabelInput } from '../../reusable/FloatLabel/Input'

type UrlInputProps = {
  id: string
  value: string
}

export const UrlInput = ({ id, value }: UrlInputProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    const action: UpdateAction<'image'> = {
      type: 'UPDATE',
      args: { id, diff: { url: value } },
    }

    dispatch(action)
  }

  return (
    <FloatLabelInput
      id={id + '__image_url'}
      label='url'
      type='url'
      onChange={updateFn}
      value={value ?? ''}
    />
  )
}
