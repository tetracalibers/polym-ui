import { FormatArgs } from '../../types/FormatArgs'
import { EditPanel } from '../../design/EditPanel'
import { CiteInput } from './CiteInput'
import { ContentInput } from './ContentInput'

export type BlockquoteBlockProps = {
  id: string
  value: FormatArgs['blockquote']
}

export const BlockquoteBlock = ({ id, value }: BlockquoteBlockProps) => {
  return (
    <EditPanel>
      <ContentInput id={id} value={value.input ?? ''} />
      <CiteInput id={id} value={value.cite ?? ''} />
    </EditPanel>
  )
}
