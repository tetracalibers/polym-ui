import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'

export type LinkBlockProps = {
  id: string
}

export const LinkBlock = ({ id }: LinkBlockProps) => {
  return (
    <>
      <VisuallyHidden>
        <label htmlFor={id + '_url'}>url of link</label>
      </VisuallyHidden>
      <input id={id + '_url'}></input>
      <VisuallyHidden>
        <label htmlFor={id + '_textlabel'}>text label of link</label>
      </VisuallyHidden>
      <input id={id + '_textlabel'}></input>
    </>
  )
}
