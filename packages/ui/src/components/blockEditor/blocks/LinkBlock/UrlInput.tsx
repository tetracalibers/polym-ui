import { ChangeEvent, useContext } from 'react'
import { FloatLabelInput } from '../FloatLabelInput'
import { BlockEditorContext } from '../..'
import { UpdateAction } from '../../module/reducer'

type UrlInputProps = {
  id: string
  value: string
}

export const UrlInput = ({ id, value }: UrlInputProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    const action: UpdateAction<'link'> = {
      type: 'UPDATE',
      args: { id, diff: { url: value } },
    }

    dispatch(action)
  }

  return (
    <FloatLabelInput
      id={id + '_url'}
      label='url'
      type='url'
      onChange={updateFn}
      value={value ?? ''}
    />
  )
}
