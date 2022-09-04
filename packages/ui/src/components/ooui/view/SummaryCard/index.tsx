import { ReactElement, ReactNode } from 'react'
import { SummaryFlex, Logo, Summary } from './styled'

type SummaryCardProps = {
  logo: ReactElement
  children: ReactNode
}

export const SummaryCard = ({ children, logo }: SummaryCardProps) => {
  return (
    <SummaryFlex>
      <Logo>{logo}</Logo>
      <Summary>{children}</Summary>
    </SummaryFlex>
  )
}
