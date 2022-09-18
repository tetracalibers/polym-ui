import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { ComponentPropsWithoutRef } from 'react'
import { HiPlus } from 'react-icons/hi'

const Toggle = styled.button`
  ${ResetCss.button}

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s ease;
  padding: 1rem;
  width: 100%;
  font-size: 1.25rem;
  border-radius: 1rem;
`

type SummaryProps = {
  children: string
  isOpen: boolean
} & Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'type'>

export const Summary = ({ children, isOpen, ...buttonProps }: SummaryProps) => {
  return (
    <Toggle type='button' {...buttonProps}>
      <span>{children}</span>
      <HiPlus />
    </Toggle>
  )
}
