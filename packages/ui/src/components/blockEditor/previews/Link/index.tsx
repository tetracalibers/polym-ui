import { BlockLink } from './BlockLink'
import { InlineLink } from './InlineLink'

type LinkPreviewProps = {
  url: string
  children: string
  isInline?: boolean
}

export const LinkPreview = ({
  url,
  children,
  isInline = false,
}: LinkPreviewProps) => {
  return isInline ? (
    <InlineLink url={url}>{children}</InlineLink>
  ) : (
    <BlockLink url={url}>{children}</BlockLink>
  )
}
