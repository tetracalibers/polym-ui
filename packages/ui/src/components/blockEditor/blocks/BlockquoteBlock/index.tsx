import { FormatArgs } from '../../types/FormatArgs'
import { GroupPanel } from '../../dedicated/GroupPanel'
import { CiteInput } from './CiteInput'
import { ContentInput } from './ContentInput'

export type BlockquoteBlockProps = {
  id: string
  value: FormatArgs['blockquote']
}

export const BlockquoteBlock = ({ id, value }: BlockquoteBlockProps) => {
  return (
    <GroupPanel>
      <ContentInput id={id} value={value.input ?? ''} />
      <CiteInput id={id} value={value.cite ?? ''} />
    </GroupPanel>
  )
}
