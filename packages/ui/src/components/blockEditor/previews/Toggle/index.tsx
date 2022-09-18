import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Detail } from './Detail'
import { Summary } from './Summary'

const drawUnderline = keyframes`
  0% {
    background-size: 500% 0%;
  }

  100% {
    background-size: 100% 15%;
  }
`

const Wrap = styled.div`
  --color: #4d608b;

  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  transition: box-shadow 0.5s cubic-bezier(0.37, 0, 0.63, 1); /* easeInOutSine */
  color: var(--color);
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em;

  &[data-open='true'] {
    box-shadow: rgb(0 0 0 / 45%) 0px 25px 20px -20px,
      rgba(67, 71, 85, 0.27) 0px 0px 0.25em;
  }

  & > button > span {
    --line-color: #cdf0ea;

    width: 100%;
    text-align: left;
    color: var(--color);
  }

  &[data-open='true'] > button > span {
    padding-bottom: 0.5rem;
    animation-name: ${drawUnderline};
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    background-position: left 100% bottom 10%;
    background-repeat: no-repeat;
    background-image: linear-gradient(
      179deg,
      var(--line-color) 0%,
      var(--line-color) 50%,
      transparent 54%,
      transparent 100%
    );
  }

  & > button > svg {
    transition: transform 0.5s ease;
    transform: rotate(180deg);
    color: var(--color);
    fill: var(--color);
    stroke: var(--color);
  }

  &[data-open='true'] > button > svg {
    transform: rotate(45deg);
  }
`

export type ToggleContentProps = {
  summary: string
  children: string
}

export const ToggleContent = ({ summary, children }: ToggleContentProps) => {
  const [isOpen, setOpenFlag] = useState(true)
  const toggleOpen = () => setOpenFlag(flag => !flag)

  return (
    <Wrap data-open={isOpen}>
      <Summary isOpen={isOpen} onClick={toggleOpen}>
        {summary}
      </Summary>
      {isOpen && <Detail>{children}</Detail>}
    </Wrap>
  )
}
