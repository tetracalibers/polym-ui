import { VisuallyHidden } from '../../../a11y-helper/VisuallyHidden'
import { UrlInput } from './UrlInput'

export type LinkBlockProps = {
  id: string
}

export const LinkBlock = ({ id }: LinkBlockProps) => {
  return (
    <>
      <UrlInput id={id} />
      <label htmlFor={id + '_textlabel'}>
        <VisuallyHidden>text label of link</VisuallyHidden>
      </label>
      <input id={id + '_textlabel'}></input>
    </>
  )
}
