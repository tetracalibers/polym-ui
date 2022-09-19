import { useContext } from 'react'
import { BlockEditorContext } from '../..'
import { Tab } from '../../../Tab'
import { FormatArgs } from '../../module/FormatArgs'
import { UpdateAction } from '../../module/reducer'
import { GroupPanel } from '../GroupPanel'
import { Dropzone } from './Dropzone'
import { UrlInput } from './UrlInput'

type ImageBlockProps = {
  id: string
  value: FormatArgs['image']
}

export const ImageBlock = ({ id, value }: ImageBlockProps) => {
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

  return (
    <GroupPanel>
      <Tab titleTabListTheme={'Fill'} hoverEffect='fillFromUnderline'>
        <Tab.Panel title='Upload'>
          <Dropzone updateFn={updateFn} />
        </Tab.Panel>
        <Tab.Panel title='URL Input'>
          <UrlInput id={id} value={value.url} />
        </Tab.Panel>
      </Tab>
    </GroupPanel>
  )
}
