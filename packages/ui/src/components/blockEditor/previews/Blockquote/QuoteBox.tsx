import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { isWebUri } from 'valid-url'
import { Cite } from './Cite'

export type QuoteBoxProps = {
  cite: string | undefined
  children: string
}

export const QuoteBox = ({ children, cite }: QuoteBoxProps) => {
  const isCiteValidUrl = cite !== undefined && isWebUri(cite)

  const quoteAttrs = isCiteValidUrl ? { cite } : {}

  return (
    <div>
      <ImQuotesLeft />
      <blockquote {...quoteAttrs}>
        <p>{children}</p>
        {cite && <Cite>{cite}</Cite>}
      </blockquote>
      <ImQuotesRight />
    </div>
  )
}
