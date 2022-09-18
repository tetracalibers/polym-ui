import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import { isWebUri } from 'valid-url'
import { Cite } from './Cite'

export type InlineQuoteProps = {
  cite: string | undefined
  children: string
}

export const InlineQuote = ({ children, cite }: InlineQuoteProps) => {
  const isCiteValidUrl = cite !== undefined && isWebUri(cite)

  const quoteAttrs = isCiteValidUrl ? { cite } : {}

  return (
    <div>
      <RiDoubleQuotesL />
      <q {...quoteAttrs}>{children}</q>
      {cite && <Cite inline>{cite}</Cite>}
      <RiDoubleQuotesR />
    </div>
  )
}
