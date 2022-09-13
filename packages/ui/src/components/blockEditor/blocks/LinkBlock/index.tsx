import { LabelInput } from './LabelInput'
import { UrlInput } from './UrlInput'

export type LinkBlockProps = {
  id: string
}

export const LinkBlock = ({ id }: LinkBlockProps) => {
  return (
    <>
      <UrlInput id={id} />
      <LabelInput id={id} />
    </>
  )
}
