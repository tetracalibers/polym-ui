import { AiOutlineRight } from 'react-icons/ai'
import { HiLink } from 'react-icons/hi'
import styled from 'styled-components'
import { Anchor } from '../../core/Anchor'
import { HorizontalCenter } from '../../layout-algorithm/HorizontalCenter'
import { WithIcon } from '../../with-icon/core'

const InlineLink = styled(Anchor)`
  & {
    --underline-thickness: 1px;
    --underline-color: #b1b2ff;

    position: relative;
    text-decoration: none;
    display: inline-block;
    padding: 0 1px;
    transition: color ease 0.3s;
    color: #4d608b;

    /* クリック範囲に擬似要素も含める */
    padding: calc(var(--underline-thickness) * 3) 0;
    margin: calc(-1 * var(--underline-thickness) * 3) 0;
  }

  &:visited {
    color: #6e85b7;
  }

  & svg {
    color: var(--underline-color);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    /* 二重の下線 */
    background-image: linear-gradient(
      0deg,
      var(--underline-color) 0px,
      var(--underline-color) var(--underline-thickness),
      /* 1本目の線 */ transparent var(--underline-thickness),
      transparent calc(var(--underline-thickness) * 2),
      /* 1本目と2本目の間隔 */ var(--underline-color)
        calc(var(--underline-thickness) * 2),
      var(--underline-color) calc(var(--underline-thickness) * 3)
        /* 2本目の線 */
    );
    background-size: 100% calc(var(--underline-thickness) * 3);
    background-repeat: no-repeat;
    background-position: left bottom;
    height: calc(var(--underline-thickness) * 3);
    bottom: calc(var(--underline-thickness) * 3 / 2);
  }

  &::before {
    width: 0%;
    left: 0;
    transition: width ease 0.4s;
  }

  &::after {
    width: 100%;
    left: 0;
    transition: all ease 0.6s;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover::after {
    left: 100%;
    width: 0%;
    transition: all ease 0.2s;
  }
`

const Centering = styled.div`
  --color: #4d608b;
  --visited-color: #6e85b7;
  --font-size: 1rem;

  position: relative;
  z-index: 1;
  padding: var(--font-size) 0 calc(var(--font-size) * 2);
  text-align: center;
`

const BlockLink = styled(Anchor)`
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
  ${BlockLink} & {
    transition: transform 0.8s;
  }

  ${BlockLink}:hover & {
    transform: translateX(calc(var(--font-size) * 0.5));
  }
`

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
    <InlineLink href={url} openInNewTab>
      <WithIcon spaceV={0} alignItems={'center'}>
        <HiLink />
        {children}
      </WithIcon>
    </InlineLink>
  ) : (
    <Centering>
      <BlockLink href={url} openInNewTab>
        <WithIcon iconChild='last' alignItems='center'>
          <InnerText>{children}</InnerText>
          <AiOutlineRight />
        </WithIcon>
      </BlockLink>
    </Centering>
  )
}
