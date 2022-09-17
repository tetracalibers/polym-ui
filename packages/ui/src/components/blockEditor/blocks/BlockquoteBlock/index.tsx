import { GroupPanel } from '../GroupPanel'
import { CiteInput } from './CiteInput'
import { ContentInput } from './ContentInput'

export type BlockquoteBlockProps = {
  id: string
}

export const BlockquoteBlock = ({ id }: BlockquoteBlockProps) => {
  return (
    <GroupPanel>
      <ContentInput id={id} />
      <CiteInput id={id} />
    </GroupPanel>
  )
}
