import { AiOutlineRight } from 'react-icons/ai'
import styled from 'styled-components'
import { Anchor } from '../../../core/Anchor'
import { WithIcon } from '../../../with-icon/core'

const Centering = styled.div`
  --color: #4d608b;
  --visited-color: #6e85b7;
  --font-size: 1rem;

  position: relative;
  z-index: 1;
  padding: var(--font-size) 0 calc(var(--font-size) * 2);
  text-align: center;
`

const Link = styled(Anchor)`
  padding: var(--font-size) calc(var(--font-size) * 2.5);
  border: 1.5px solid #b1b2ff;
  cursor: pointer;
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  z-index: 2;
  text-decoration: none;
  color: var(--color);

  &:visited {
    color: var(--visited-color);
  }

  &::after {
    content: '';
    background-color: #cdf0ea;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: calc(var(--font-size) * 0.5);
    left: calc(var(--font-size) * 0.5);
  }

  & svg {
    font-size: var(--font-size);
    transition: 0.2s;
    transition: transform 1;
  }

  &:hover svg {
    opacity: 1;
    transform: translateX(calc(var(--font-size) * 0.5));
  }
`

const InnerText = styled.span`
  ${Link} & {
    transition: transform 0.8s;
  }

  ${Link}:hover & {
    transform: translateX(calc(var(--font-size) * 0.5));
  }
`

type BlockLinkProps = {
  url: string
  children: string
}

export const BlockLink = ({ url, children }: BlockLinkProps) => {
  return (
    <Centering>
      <Link href={url} openInNewTab>
        <WithIcon iconChild='last' alignItems='center'>
          <InnerText>{children}</InnerText>
          <AiOutlineRight />
        </WithIcon>
      </Link>
    </Centering>
  )
}
