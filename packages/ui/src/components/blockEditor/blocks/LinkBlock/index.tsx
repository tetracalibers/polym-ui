import { GroupPanel } from '../GroupPanel'
import { LabelInput } from './LabelInput'
import { UrlInput } from './UrlInput'

export type LinkBlockProps = {
  id: string
}

export const LinkBlock = ({ id }: LinkBlockProps) => {
  return (
    <GroupPanel>
      <UrlInput id={id} />
      <LabelInput id={id} />
    </GroupPanel>
  )
}
