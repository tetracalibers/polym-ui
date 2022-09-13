import { ChangeEvent, useContext } from 'react'
import { FloatLabelInput } from '../FloatLabelInput'
import { isWebUri } from 'valid-url'
import { BlockEditorContext } from '../..'

export type UrlInputProps = {
  id: string
}

export const UrlInput = ({ id }: UrlInputProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!isWebUri(value)) return
    dispatch({
      type: 'UPDATE',
      args: { key: id, diff: { url: value } },
    })
  }

  return (
    <FloatLabelInput
      id={id + '_url'}
      label='url'
      type='url'
      onChange={updateFn}
    />
  )
}
