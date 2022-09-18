import { InlineQuote } from './InlineQuote'
import { QuoteBox } from './QuoteBox'

export type BlockquoteProps = {
  isInline?: boolean
  cite?: string
  children: string
}

export const Blockquote = ({ children, isInline, cite }: BlockquoteProps) => {
  return isInline ? (
    <InlineQuote cite={cite}>{children}</InlineQuote>
  ) : (
    <QuoteBox cite={cite}>{children}</QuoteBox>
  )
}
