import { useContext } from 'react'
import { BlockEditorContext } from '../..'
import { UpdateAction } from '../../module/reducer'
import { Dropzone } from './Dropzone'

type ImageBlockProps = {
  id: string
}

export const ImageBlock = ({ id }: ImageBlockProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (files: File[]) => {
    const action: UpdateAction<'image'> = {
      type: 'UPDATE',
      args: {
        id,
        diff: { url: files.length === 0 ? '' : URL.createObjectURL(files[0]) },
      },
    }
    dispatch(action)
  }

  return <Dropzone updateFn={updateFn} />
}
