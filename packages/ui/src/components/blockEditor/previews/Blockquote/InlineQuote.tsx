import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import styled from 'styled-components'
import { isWebUri } from 'valid-url'
import { Cite } from './Cite'

const PositionManager = styled.div`
  --theme-color: #7a87b0;

  display: inline;
  color: var(--theme-color);
  padding: 0.25rem;

  & cite {
    padding-right: 0.25rem;
    font-style: normal;
  }

  & cite::before {
    content: ' (';
  }

  & cite::after {
    content: ') ';
  }
`

const Q = styled.q`
  padding: 0.25rem;

  &::before {
    content: '';
  }

  &::after {
    content: '';
  }
`

export type InlineQuoteProps = {
  cite: string | undefined
  children: string
}

export const InlineQuote = ({ children, cite }: InlineQuoteProps) => {
  const isCiteValidUrl = cite !== undefined && isWebUri(cite)

  const quoteAttrs = isCiteValidUrl ? { cite } : {}

  return (
    <PositionManager>
      <RiDoubleQuotesL />
      <Q {...quoteAttrs}>{children}</Q>
      {cite && <Cite inline>{cite}</Cite>}
      <RiDoubleQuotesR />
    </PositionManager>
  )
}
