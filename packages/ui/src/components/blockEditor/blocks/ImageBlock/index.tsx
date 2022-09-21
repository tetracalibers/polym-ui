import { useContext } from 'react'
import styled from 'styled-components'
import { BlockEditorContext } from '../..'
import { Tab } from '../../../Tab'
import { FormatArgs } from '../../types/FormatArgs'
import { UpdateAction } from '../../core/actions'
import { GroupPanel } from '../style/GroupPanel'
import { CaptionInput } from './CaptionInput'
import { Dropzone } from '../../reusable/Dropzone/Dropzone'
import { UrlInput } from './UrlInput'
import { FileLink } from '../../types/FileLink'

const Container = styled(GroupPanel)`
  /* tabのスタイル上書き */
  & ul[role='tablist'] {
    --duration: 0.3s;

    justify-content: start;
    margin: 0;
  }

  & ul[role='tablist'] > li[data-active] > a {
    padding: 0.75rem 1.75rem;
    border-radius: 1rem 1rem 0 0;
    color: #4d608b;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  & ul[role='tablist'] > li[data-active] > a::after {
    background: linear-gradient(to right, #fbc2eb, #a6c1ee);
  }

  & ul[role='tablist'] > li[data-active='false'] > a {
    box-shadow: inset #3f3f3f33 0px 1px 3px 0px;
    background-color: rgba(255, 255, 255, 0.25);
  }
`

type ImageBlockProps = {
  id: string
  value: FormatArgs['image']
}

export const ImageBlock = ({ id, value }: ImageBlockProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (filelinks: FileLink[]) => {
    const action: UpdateAction<'image'> = {
      type: 'UPDATE',
      args: {
        id,
        diff: { url: filelinks.length === 0 ? '' : filelinks[0].link },
      },
    }
    dispatch(action)
  }

  return (
    <Container>
      <Tab titleTabListTheme={'Fill'} hoverEffect='fillFromUnderline'>
        <Tab.Panel title='File'>
          <Dropzone updateFn={updateFn} previewLinks={[value.url]} />
        </Tab.Panel>
        <Tab.Panel title='URL'>
          <UrlInput id={id} value={value.url} />
        </Tab.Panel>
      </Tab>
      <CaptionInput id={id} value={value.caption ?? ''} />
    </Container>
  )
}
