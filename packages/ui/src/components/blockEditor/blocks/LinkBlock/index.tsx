import { FormatArgs } from '../../types/FormatArgs'
import { GroupPanel } from '../../dedicated/GroupPanel'
import { LabelInput } from './LabelInput'
import { UrlInput } from './UrlInput'

export type LinkBlockProps = {
  id: string
  value: FormatArgs['link']
}

export const LinkBlock = ({ id, value }: LinkBlockProps) => {
  return (
    <GroupPanel>
      <UrlInput id={id} value={value.url} />
      <LabelInput id={id} value={value.label} />
    </GroupPanel>
  )
}
