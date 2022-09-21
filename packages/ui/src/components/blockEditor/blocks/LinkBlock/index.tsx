import { FormatArgs } from '../../types/FormatArgs'
import { EditPanel } from '../../design/EditPanel'
import { LabelInput } from './LabelInput'
import { UrlInput } from './UrlInput'

export type LinkBlockProps = {
  id: string
  value: FormatArgs['link']
}

export const LinkBlock = ({ id, value }: LinkBlockProps) => {
  return (
    <EditPanel>
      <UrlInput id={id} value={value.url} />
      <LabelInput id={id} value={value.label} />
    </EditPanel>
  )
}
