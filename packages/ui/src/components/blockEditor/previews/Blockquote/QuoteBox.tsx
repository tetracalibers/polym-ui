import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import styled from 'styled-components'
import { isWebUri } from 'valid-url'
import { Cite } from './Cite'

const PositionManager = styled.div`
  --gap: 10px;
  --theme-color: #7a87b0;
  --icon-size: 1.5rem;

  position: relative;

  && {
    margin-bottom: 1rem;
  }
`

const Quote = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  color: var(--theme-color);

  & svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }
`

const LeftTopQuote = styled(Quote)`
  top: calc(-1 * var(--gap));
  left: 0;

  &::after {
    content: '';
    flex: 1;
    border-bottom: 2px solid var(--theme-color);
  }

  & svg {
    margin-right: var(--gap);
  }
`

const RightBottomQuote = styled(Quote)`
  top: calc(100% - var(--gap) * 0.75);
  right: 0;

  &::before {
    content: '';
    flex: 1;
    border-bottom: 2px solid var(--theme-color);
  }

  & svg {
    margin-left: var(--gap);
  }
`

const Blockquote = styled.blockquote`
  position: relative;
  padding: 2rem 1rem;
  margin: 0;

  p {
    margin: 0;
    padding: 1rem 0;
    color: var(--theme-color);
  }

  cite {
    text-align: right;
    display: block;
    color: var(--theme-color);
    margin-bottom: -1rem;
  }
`

export type QuoteBoxProps = {
  cite: string | undefined
  children: string
}

export const QuoteBox = ({ children, cite }: QuoteBoxProps) => {
  const isCiteValidUrl = cite !== undefined && isWebUri(cite)

  const quoteAttrs = isCiteValidUrl ? { cite } : {}

  return (
    <PositionManager>
      <LeftTopQuote>
        <ImQuotesLeft />
      </LeftTopQuote>
      <Blockquote {...quoteAttrs}>
        <p>{children}</p>
        {cite && <Cite>{cite}</Cite>}
      </Blockquote>
      <RightBottomQuote>
        <ImQuotesRight />
      </RightBottomQuote>
    </PositionManager>
  )
}
