import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'

export type LinkBlockProps = {
  id: string
}

export const LinkBlock = ({ id }: LinkBlockProps) => {
  return (
    <>
      <label htmlFor={id + '_url'}>
        <VisuallyHidden>url of link</VisuallyHidden>
      </label>
      <input id={id + '_url'}></input>
      <label htmlFor={id + '_textlabel'}>
        <VisuallyHidden>text label of link</VisuallyHidden>
      </label>
      <input id={id + '_textlabel'}></input>
    </>
  )
}
